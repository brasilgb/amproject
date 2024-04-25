<?php

namespace App\Models;

use App\Models\Traits\Tenantable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Tenant extends Model
{
    use Tenantable;
    protected $table = "tenants";
    protected $guarded = ['id'];

    public function users()
    {
        return $this->hasMany(User::class);
    }
}