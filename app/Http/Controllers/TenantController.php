<?php

namespace App\Http\Controllers;

use App\Models\Tenant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class TenantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');

        $query = Tenant::orderBy('id', 'DESC');

        if ($search) {
            $query->where('nome', 'like', '%' . $search . '%')
                ->orWhere('cnpj', 'like', '%' . $search . '%');
        }

        $tenants = $query->paginate(12);
        return Inertia::render('Tenant/index', ['tenants' => $tenants]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Tenant/addTenant');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
            'email' => 'Endereço de e-mail válido',
            'cpf_ou_cnpj' => 'CPF ou CNPJ inválido',
            'unique' => 'CPF ou CNPJ já está em uso',
        ];
        $request->validate(
            [
                'nome' => 'required',
                'cpf' => 'nullable|cpf_ou_cnpj|unique:clientes',
                'email' => 'nullable|email|unique:clientes',
                'telefone' => 'required'
            ],
            $messages,
            [
                'nome' => 'nome',
                'email' => 'e-mail',
            ]
        );

        Tenant::create($data);
        Session::flash('success', 'Cliente cadastrado com sucesso!');
        return redirect()->route('customrs.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Tenant $tenant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tenant $tenant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tenant $tenant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tenant $tenant)
    {
        //
    }
}
