<?php

namespace App\Models;

use App\Models\Traits\Tenantable;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Tenant extends Pivot
{
    use Tenantable;
    protected $table = "tenants";
    protected $guarded = ['id'];
}