<?php

namespace App\Http\Controllers;

use App\Models\GoogleUser;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class GoogleUsersController extends Controller
{
    public function validateToken(Request $request){
        
        $aud = $request->aud;
        if($aud == '447316949035-0dh81r3mcdd0hr0pe67du3g7omrak7h8.apps.googleusercontent.com'){
            $user = GoogleUser::where('email', $request['email'])->first();

            if(!$user){
                
                $googleUser = new GoogleUser();
                $googleUser->name = $request['name'];
                $googleUser->email = $request['email'];
                $googleUser->given_name = $request['given_name'];
                $googleUser->family_name = $request['family_name'];

                $googleUser->save();

                $response = [
                    'success' => true,
                    'data' => $googleUser
                ];
        
                return response()->json($response, Response::HTTP_CREATED);
    
            }

            $response = [
                'success' => true,
                'data' => $user
            ];
            return response()->json($response, Response::HTTP_OK);
        }
    }
}
