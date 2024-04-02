<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Sale;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class JsonToDatabaseController extends Controller
{
    public function index(Request $request)
    {
        $requser = $request->all();

        if ($requser["type"] === "user") {
            foreach ($requser["dbdata"] as $user) {
                $existuser = User::where('email', $user['email'])->exists();
                $data[] = [
                    "company_id" => $user['cnpj'],
                    "name" => $user['name'],
                    "email" => $user['email'],
                    "password" => Hash::make($user['password']),
                    "roles" => $user['roles'],
                ];
            }
            if (!$existuser) {
                User::insert($data);
            }
        }
        if ($requser["type"] === "sale") {
            foreach ($requser["dbdata"] as $sale) {
                $existsale = Sale::where('dtfat', $sale['data'])->exists();
                $data[] = [
                    "company_id" => $sale['cnpj'],
                    "faturamento" => $sale['faturamento'],
                    "meta" => $sale['meta'],
                    "repfat" => $sale['repfat'],
                    "margem" => $sale['margem'],
                    "dtfat" => $sale['data'],
                ];
            }
            // dd(($existsale));
            if (!$existsale) {
                Sale::insert($data);
            }
        }

        return response()->json([
            "response" => [
                "message" => "Dados salvos com sucesso!",
                "success" => true,
                "status" => 201
            ],
        ], 201);
    }
}
