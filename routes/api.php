<?php

use App\Http\Controllers\Api\JsonToDatabaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/datainsert', [JsonToDatabaseController::class, 'index'])->name('datainsert');
