<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seller extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'state_id', 'city_id', 'na_code', 'phone'];

    public function city(){
        return $this->belongsTo(City::class);
    }

    public function state(){
        return $this->belongsTo(State::class);
    }
}
