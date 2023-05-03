<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
use Illuminate\Auth\Authenticatable as AuthenticableTrait;
use Laravel\Sanctum\HasApiTokens;

class GoogleUser extends Eloquent   
{
    use AuthenticableTrait;
    use HasFactory;
    use HasApiTokens;

    protected $connection = 'mongodb';
    protected $collection = 'google_users';

    protected $fillable = [
        'name',
        'email',
    ];
}
