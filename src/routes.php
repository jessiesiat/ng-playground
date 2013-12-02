<?php

//routes goes here for jessiesiat/ng-playground

Route::group(array('prefix' => 'ng-playground'), function()
{
	Route::get('/', function()
	{
		Return View::make('ng::index');
	});

	Route::get('hello', function()
	{
		return View::make('ng::hello');
	});
});

Route::group(array('prefix' => 'ng/api'), function()
{
	$phones = array(
				array(
					'id' => 1,
					'name' => 'Nexus S',
					'snippet' => 'Fast just got faster with Nexus S.',
					'age' => 1,
					'connectivity' => array(
							'infrared' => false,
							'gps'	=> true
							)
					),
				array(
					'id' => 2,
					'name' => 'Motorola XOOM™ with Wi-Fi',
				    'snippet' => 'The Next, Next Generation tablet.',
				    'age' => 5 
					),
				array(
					'id' => 3,
					'name' => 'MOTOROLA XOOM™',
				    'snippet' => 'The Next, Next Generation tablet. Ok!',
				 	'age' => 3
					)
			);

	Route::get('phones', function() use ($phones)
	{
		return json_encode($phones);
	});

	Route::get('phones/{id}', function($id) use ($phones)
	{
		$phone = head($phones);

		return json_encode($phone);
	});

	Route::get('users', function()
	{
		$user = new Jessiesiat\NgPlayground\Models\NgUser;

		return $user->all()->toJson();
	});

	Route::get('users/{id}', function($id)
	{
		$user = new Jessiesiat\NgPlayground\Models\NgUser;

		return $user->find($id)->toJson();
	});

	Route::post('users/{id}', function($id) 
	{
		$user = Jessiesiat\NgPlayground\Models\NgUser::find($id);
		$user->name = Input::get('name');	
		$user->email = Input::get('email');
		$user->about = Input::get('about');
		$user->save();

		return $user->toJson();
	});
});