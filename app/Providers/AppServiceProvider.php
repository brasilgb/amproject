<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Listeners\SetTenatIdInSession;
use Illuminate\Auth\Events\Login;

class AppServiceProvider extends ServiceProvider
{

    protected $listen = [
        Login::class => [
            SetTenatIdInSession::class
        ],
    ];
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
