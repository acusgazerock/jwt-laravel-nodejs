<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserTest extends TestCase
{
    /**
     * A basic test input User.
     *
     * @return void
     */
    public function inputUserTest()
    {
        $response = $this->call('POST', '/api/auth/register', [
            'name' => 'acus',
            'username' => 'acus',
            'role' => 'admin',
            'password' => 'acus',
        ])
            ->seeJsonEquals(['status' => true])
            ->seeJsonStructure([
                'status',
                'message',
                'data' => [
                    'name', 'username',
                    'role', 'updated_at', 'created_at'
                ]
            ]);

    }

    public function loginUserTest()
    {
        $response = $this->call('POST', '/api/auth/login', [
            'username' => 'acus',
            'password' => 'acus',
        ])
            ->seeJsonStructure([
                'token',
                'data' => [
                    'name', 'username',
                    'role', 'updated_at', 'created_at'
                ]
            ]);

    }


}
