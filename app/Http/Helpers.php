<?php


use Illuminate\Support\Facades\Route;

if (! function_exists('isActive') ){
    function isActive($path , $className = 'active'){
        if (! is_array($path)){
            return Route::currentRouteName() == $path ? $className : "";
        }
        return in_array(Route::currentRouteName() , $path) ? $className : "";
    }
}
if (! function_exists('user') ) {
    function user()
    {
        return auth()->user();
    }
}
