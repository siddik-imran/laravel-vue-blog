<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('public.index');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

//route for anypath/ dynamic route
// Route::get('/{anypath}', 'HomeController@index')->where('path', '.*');

//Category
Route::post('/add-category', 'CategoryController@add_category');
Route::get('/category', 'CategoryController@all_category');
Route::get('/category/{id}', 'CategoryController@delete_category');
Route::get('/edit-category/{id}', 'CategoryController@edit_category');
Route::post('/update-category/{id}', 'CategoryController@update_category');


Route::group(['middleware' => ['auth']], function(){
    // post
    Route::get('/post', 'PostController@all_post');
    Route::post('/save-post', 'PostController@save_post');
    Route::get('/delete-post/{id}', 'PostController@delete_post');
    Route::get('/edit-post/{id}', 'PostController@edit_post');
    Route::post('/update-post/{id}', 'PostController@update_post');
});



// front-End route
Route::get('/blog-post', 'BlogController@get_all_blogPost');
Route::get('/single-post/{id}', 'BlogController@get_singlePost');
Route::get('/categories', 'BlogController@get_allCategory');
Route::get('/category-post/{id}', 'BlogController@get_allPostByCatId');
Route::get('/search', 'BlogController@searchPost');
Route::get('/latest-post', 'BlogController@latestPost');
