<?php

namespace App\Models;

use App\Traits\TenantAttributeTrait;
use App\Traits\TenantScoped;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    use HasFactory;

    protected $fillable = [
        'cnpj',
        'razao'
    ];
}