Learning AngularJs and Laravel package development.
I placed also AngularJs tutorial you may want to learn!

### Installation

Through Composer! 

Update your `composer.json` to something like this and run `composer update`.
```json
{
	"repositories": [
        {
            "type": "vcs",
            "url": "https://github.com/jessiesiat/ng-playground"
        }
    ],
	"require": {
		"laravel/framework": "4.0.*",
		"jessiesiat/ng-playground": "dev-master"
	},
}
```

Next add the service provider in `app/config/app.php`.

```php
'providers' => array(
	
	// ...
	
	'Jessiesiat\NgPlayground\NgPlaygroundServiceProvider',
),
```

Publish the package assets to your public directory.

`php artisan asset:publish jessiesiat/ng-playground`

Run the migration.

`php artisan migrate --package="jessiesiat/ng-playgrount"`

It will create `ng-users` table and dump some data.

Thats it! View it in your browser by appending `/ng-playground` to the URL of your site. (yoursite.com/ng-playground).
