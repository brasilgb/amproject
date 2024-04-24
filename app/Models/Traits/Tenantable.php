<?php

namespace App\Models\Traits;

use App\Models\Scopes\TenantScope;
use App\Models\Tenant;

trait Tenantable
{
    protected static function bootTenantable()
    {
        static::addGlobalScope(new TenantScope);
        if (checkTenantId()) {
            static::creating(function ($model) {
                $model->tenant_id = session('tenant_id');
            });
        }
    }

    public function tenantstoall()
    {
        $this->belongsTo(Tenant::class);
    }
}
