<?php

namespace Tests\Unit;

use Faker\Factory;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */

    /**@test*/
    public function testDatabase()
{
    // Make call to application...

    $this->assertDatabaseHas('users', [
        'email' => 'oubagha@gmail.com'
    ]);
}



/**@test*/
   public function testroot()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    /**@test*/
    public function testAuth(){


    $response = $this->get('/saisirAbs')->assertRedirect('/loginin');

    }


/**@test*/

  public function test_can_update_nb_abs() {
        $etudiant = factory(Etudiant::class)->create();
        $data = [
            'nb_abs' => 3,
        ];


/* public function update(Request $request, Post $post) {
        $post->update($request->all());
        return response()->json($post);
    }*/
        //Route::put('/{post}', 'PostController@update')->name('etudiants.update');

        $this->put(route('etudiants.update', $etudiant->id), $data)
            ->assertStatus(200)
            ->assertJson($data);
    }



    /**@test*/


public function test_can_num_td() {
        $post = factory(Post::class)->create();
        $this->get(route('posts.show', $post->id))
            ->assertStatus(200);
    }
























/*************************************************************************/

/**@test*/


     public function test_Login_By_Email_password()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/login')
                    ->type('email', 'oubagha@gmail.com')
                    ->type('password', '00000000')
                    ->press('Se connecter')
                    ->assertPathIs('/')
                    ->assertSee('Logout')
                    ->clickLink('Logout')
                    ->assertSee('Login');
        });
    }


}
