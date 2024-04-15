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
            $table->string('descricao', 50);
            $table->string('endereco', 80);
            $table->integer('numero');
            $table->string('cep', 20);
            $table->string('municipio', 50);
            $table->string('uf', 20);
            $table->string('bairro', 50);
            $table->string('cnpj', 50);
            $table->string('inscricao', 50);
            $table->string('telefone', 20);
            $table->string('whatsapp', 20)->nullable();
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