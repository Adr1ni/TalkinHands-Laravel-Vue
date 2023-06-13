<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::controller(UserController::class)->group(function (){
    Route::post('/users', 'insert');
    Route::post('/login', 'login');
    Route::put('/users/{id}', 'update');
    Route::delete('/users/{id}', 'delete');    
    Route::get('user-profile',[UserController::class, 'userProfile']);
});

Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::post('logout', [UserController::class, 'logout']);
    Route::get('/users', [UserController::class, 'all']);
});



