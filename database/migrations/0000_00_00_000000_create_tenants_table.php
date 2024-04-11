<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tenants', function (Blueprint $table) {
            $table->id();
            $table->string('cnpj');
            $table->date('nascimento')->nullable();
            $table->string('nome', 50);
            $table->string('email', 50)->nullable();
            $table->string('cep', 20)->nullable();
            $table->string('uf', 20)->nullable();
            $table->string('cidade', 50)->nullable();
            $table->string('bairro', 50)->nullable();
            $table->string('endereco', 80)->nullable();
            $table->string('complemento', 20)->nullable();
            $table->string('telefone', 20);
            $table->string('contato', 50)->nullable();
            $table->string('whatsapp', 50)->nullable();
            $table->string('telcontato', 20)->nullable();
            $table->text('obs')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tenants');
    }
};