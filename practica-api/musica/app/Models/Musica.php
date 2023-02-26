<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Musica extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'musicas';
    protected $fillable =['title','duration','preview','cover_small'];
}
