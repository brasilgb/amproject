<?php

namespace App\Models;

use App\Models\Traits\Tenantable;
use App\Traits\TenantAttributeTrait;
use App\Traits\TenantScoped;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use Tenantable;

    protected $fillable = [
        "tenant_id",
		"faturamento",
		"meta",
		"repfat",
		"margem",
		"dtfat"
    ];
}
