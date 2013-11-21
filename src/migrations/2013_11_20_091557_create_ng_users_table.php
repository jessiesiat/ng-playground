<?php

use Illuminate\Database\Migrations\Migration;

class CreateNgUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ng-users', function($table)
		{
			$table->increments('id');
			$table->string('name');
		    $table->string('email');
		    $table->string('about');
		    $table->timestamps();
		});

		//create initial data 
		DB::table('ng-users')->insert(
		    array('name' => 'John Doe', 'email' => 'johndoe@example.com', 'about' => 'You know me!', 'created_at' => new \DateTime, 'updated_at' => new \DateTime)
		);
		DB::table('ng-users')->insert(
		    array('name' => 'Juan Dela Cruz', 'email' => 'juandelacruz@example.com', 'about' => 'Filipino counterpart of John Doe', 'created_at' => new \DateTime, 'updated_at' => new \DateTime)
		);
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('ng-users');
	}

}