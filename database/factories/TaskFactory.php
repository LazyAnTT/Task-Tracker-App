<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(4),
            'description' => fake()->text,
            'status' => fake()->randomElement(['pending', 'in_progress', 'done']),
            'due_date' => fake()->dateTimeBetween('now', '+6 month'),
            'assigned_to' => fake()->name,
        ];
    }
}
