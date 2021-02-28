<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use App\Post;
class BlogController extends Controller
{
    public function get_all_blogPost()
    {
        $posts = Post::with('user', 'category')->orderBy('id', 'desc')->get();
        return response()->json([
            'posts' => $posts
        ], 200);
    }

    public function get_singlePost($id)
    {
        $post = Post::with('user', 'category')->where('id', $id)->first();
        return response()->json([
            'post' => $post
        ], 200);
    }

    public function get_allCategory()
    {
        $categories = Category::all();
        return response()->json([
            'categories' => $categories
        ], 200);
    }

    public function get_allPostByCatId($id)
    {
        $posts = Post::with('user', 'category')->where('cat_id', $id)->get();
        return response()->json([
            'posts' => $posts
        ], 200);

    }

    public function searchPost()
    {
        $search = \Request::get('s');
        $posts = Post::with('user', 'category')->where('title', 'LIKE', "%$search%")
        ->orWhere('description', 'LIKE', "%$search%")->get();
        return response()->json([
            'posts' => $posts
        ], 200);
    }

    public function latestPost(){
        $posts = Post::with('user', 'category')->orderBy('id', 'desc')->get();
        return response()->json([
            'posts' => $posts
        ], 200);
    }
}
