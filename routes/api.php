<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/students', 'StudentController@index')->name('students.all');

Route::post('/students', 'StudentController@store')->name('students.store');

Route::get('/students/{student}', 'StudentController@show')->name('students.show');

Route::put('/students/{student}', 'StudentController@update')->name('students.update');

Route::delete('/students/{student}', 'StudentController@destroy')->name('students.destroy');


