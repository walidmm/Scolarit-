<?php

//namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Auth\Authenticatable;
use App\User;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
   // $tabarticles=DB::table('tabs')->get();
   // return $tabarticles;
});





Route::get('/profs/numtd/{prof}',function($prof) {
    $data = DB::table('groups')->where('name',$prof)->pluck('num_td');
    //return response()->json($data);
    return $data;
});

Route::post('/profs/numtd/{prof}',function($prof) {
    //$data = DB::table('groups')->where('name',$prof)->pluck('num_td');
    //$data = DB::update("UPDATE groups SET num_td = num_td+1 WHERE name = '?'", [$prof]);
    	$data=DB::table('groups')
            ->where('name', $prof)
            ->increment('num_td');
    //return response()->json($data);
    return $data;
});







Route::get('/etudiants/{group}',function($group) {
    $data = DB::table('etudiants')->where('gp',$group)->pluck('name');
    //return response()->json($data);
    return $data;
});

Route::post('/etudiants/{group}',function($group) {
    $data = DB::table('etudiants')->where('gp',$group)->pluck('id');
    //return response()->json($data);
    return $data;
});

Route::get('/groupes/{group}',function($group) {
    $data = DB::table('groups')->where('prof',$group)->pluck('name');
   // return response()->json($data);
    return $data;
});

Route::post('/etudiants/saisir/{cond}',function($cond){
	 // $data = DB::update("UPDATE etudiants SET nb_abs =nb_abs+1 WHERE id in (:m)", ['m'=>$cond]);
	$tab=explode(",", $cond);
	$data=DB::table('etudiants')
            ->whereIn('id', $tab)
            ->increment('nb_abs');
    return response()->json($data);
});

Route::get('/profs/{prof}', function($prof) {
    $data = DB::update("UPDATE profs SET name = 'Patrice' WHERE id = ?", [$prof]);
    return response()->json($data);
});

Route::put('/profs/{prof}', function($prof) {
    $data = DB::update("UPDATE profs SET name = 'Patrice' WHERE id = ?", [$prof]);
    return response()->json($data);
});

