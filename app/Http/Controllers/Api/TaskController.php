<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        return Task::with('project')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|in:pending,in_progress,done',
            'due_date' => 'nullable|date',
            'assigned_to' => 'nullable|string|max:255',
        ]);

        return Task::create($validated);
    }

    public function show(Task $task)
    {
        return $task->load('project');
    }

    public function update(Request $request, Task $task)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|in:pending,in_progress,done',
            'due_date' => 'nullable|date',
            'assigned_to' => 'nullable|string|max:255',
        ]);

        $task->update($validated);

        return $task;
    }

    public function destroy(Task $task)
    {
        $task->delete();
        return response()->noContent();
    }

    public function trashed()
    {
        return Task::onlyTrashed()->with('project')->get();
    }

    public function restore($id)
    {
        $task = Task::onlyTrashed()->findOrFail($id);
        $task->restore();

        return $task;
    }

    public function forceDelete($id)
    {
        $task = Task::onlyTrashed()->findOrFail($id);
        $task->forceDelete();

        return response()->noContent();
    }
}
