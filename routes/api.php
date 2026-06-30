<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;

//Route::get('/user', function (Request $request) {
//    return $request->user();
//})->middleware('auth:sanctum');
Route::namespace('Api')->prefix('v1')->group(function (){
    Route::match(['get', 'post'], 'login', [LoginController::class, 'login']);
});

