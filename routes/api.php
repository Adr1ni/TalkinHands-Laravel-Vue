<?php

use App\Http\Controllers\GoogleUsersController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;


Route::controller(UserController::class)->group(function (){
    Route::get('/users', 'all');
    Route::post('/users', 'insert');
    Route::post('/login', 'login');
    Route::put('/users/{id}', 'update');
    Route::delete('/users/{id}', 'delete');
});

Route::controller(GoogleUsersController::class)->group(function (){
    Route::post('/googleAuth','validateToken');
});

Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::get('user-profile',[UserController::class, 'userProfile']);
    Route::post('logout', [UserController::class, 'logout']);
});