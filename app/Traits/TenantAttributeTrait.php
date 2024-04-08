<?php

namespace App\Traits;

use App\Models\Company;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

trait TenantAttributeTrait
{
    public static function bootTenantAttributeTrait()
    {
        static::creating(function ($model) {
            $model->tenant_id = auth()->user()->tenant_id;
        });
        static::retrieved(function ($model) {
            $model->where('tenant_id', auth()->user()->tenant_id);
        });
    }
    public function company()
    {
        $this->belongsTo(Company::class);
    }
}
