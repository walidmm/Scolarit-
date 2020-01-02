<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }


     /**@test*/
    public function test_redirecting_in_not_logging_in(){
       $response=  $this->assertTrue(true);
     
      
    }
    /**@test*/
     public function testGettingAllProfs()
    {
           
            $user= factory(\App\User::class)->create();
            $response = $this->actingAs($user, 'api')->json('GET', '/api/profs');
          
        }
}
