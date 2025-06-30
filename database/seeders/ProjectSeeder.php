<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Task;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Project::factory(5)->create()->each(function ($project) {
            Task::factory(3)->create([
                'project_id' => $project->id,
            ]);
        });
    }
}
