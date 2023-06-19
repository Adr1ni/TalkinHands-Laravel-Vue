<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function all(){
        $users = User::all();
        return response()->json([
            "data"=>$users
        ], Response::HTTP_OK);
    }

    public function userData($id){
        $user = User::find($id);
        return response()->json([
            "data"=>$user
        ], Response::HTTP_OK);
    }

    public function insert(Request $request){

        $message = [
            'c_password.same' => 'Las contraseñas deben ser iguales'
        ];

        $validator = Validator::make($request->all(),[ 
            'name' => 'required',
            'username' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password'
        ],$message);

        if($validator->fails()){
            $response = [
                'success' => false,
                'message' => $validator->errors()
            ];

            return response()->json($response,Response::HTTP_OK);
        }

        $user = new User();
        $user->name = $request->name;
        $user->username = $request->username;
        $user->email = $request->email;
        $user->role = $request->role;
        $user->password = Hash::make($request->password);
        $user->save();

        $response = [
            'success' => true,
            'data' => $user
        ];

        return response()->json($response, Response::HTTP_CREATED);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);
    
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('token')->plainTextToken;
            $cookie = cookie('cookie_token', $token, 60 * 24);
    
            $response = [
                "success" => true,
                "data" => $token,
                "admin" => ($user->role == 'admin')
            ];
    
            return response()->json($response, Response::HTTP_OK)->withoutCookie($cookie);
        }
    
        $response = [
            "success" => false,
            "message" => "Datos incorrectos"
        ];
    
        return response($response, Response::HTTP_OK);
    }
    

    public function update(Request $request, $id){

        $message = [
            'c_password.same' => 'Las contraseñas deben ser iguales'
        ];

        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'username' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'password' => 'required',
            'c_password' => 'required|same:password'
        ],$message);

        if($validator->fails()){
            $response = [
                'success' => false,
                'message' => $validator->errors()
            ];

            return response()->json($response,Response::HTTP_OK);
        }

        $user = User::find($id);

        $user->name = $request->name;
        $user->username = $request->username;
        $user->role = $request->role;
        $user->password = Hash::make($request->password);
        $user->save();

        $response = [
            'success' => true,
            'data' => $user
        ];

        return response()->json($response, Response::HTTP_OK);
    }

    public function delete($id){
        User::destroy($id);
        return response()->json(['success' => true], Response::HTTP_OK);
    }

    public function userProfile(){
        return response()->json([
            "success" => true,
            "data" => auth()->user()
        ],Response::HTTP_OK);
    }

    public function logout(){
        $cookie = Cookie::forget('cookie_token');
        return response(["message" => "Close session"],Response::HTTP_OK)->withCookie($cookie);
    }

}
