<?php

namespace App\Models;

use App\Traits\TenantAttributeTrait;
use App\Traits\TenantScoped;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use TenantAttributeTrait, TenantScoped;

    protected $fillable = [
        'cnpj',
        'razao'
    ];
}
