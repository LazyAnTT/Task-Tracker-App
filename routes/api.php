<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\TaskController;

Route::apiResource('projects', ProjectController::class);
Route::apiResource('tasks', TaskController::class);

Route::prefix('trash')->group(function () {
  Route::get('projects', [ProjectController::class, 'trashed']);
  Route::post('projects/{id}/restore', [ProjectController::class, 'restore']);
  Route::delete('projects/{id}/force', [ProjectController::class, 'forceDelete']);

  Route::get('tasks', [TaskController::class, 'trashed']);
  Route::post('tasks/{id}/restore', [TaskController::class, 'restore']);
  Route::delete('tasks/{id}/force', [TaskController::class, 'forceDelete']);
});
