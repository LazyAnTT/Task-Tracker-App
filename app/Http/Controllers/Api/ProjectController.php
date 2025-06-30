<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        return Project::with('tasks')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        return Project::create($validated);
    }

    public function show(Project $project)
    {
        return $project->load('tasks');
    }

    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $project->update($validated);

        return $project;
    }

    public function destroy(Project $project)
    {
        $project->delete();
        return response()->noContent();
    }

    public function trashed()
    {
        return Project::onlyTrashed()->with('tasks')->get();
    }

    public function restore($id)
    {
        $project = Project::onlyTrashed()->findOrFail($id);
        $project->restore();

        return $project;
    }

    public function forceDelete($id)
    {
        $project = Project::onlyTrashed()->findOrFail($id);
        $project->forceDelete();

        return response()->noContent();
    }
}
