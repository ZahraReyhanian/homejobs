<?php
use Illuminate\Support\Facades\Route;

Route::get('/', 'PanelController@index')->name('panel');

//User
Route::resource('users' , 'UserController');
Route::post('/panel/upload-image' , 'PanelController@uploadImageSubject')->name('uploadImage');

