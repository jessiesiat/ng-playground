<!DOCTYPE html>
<html>
  <head>
    <title>Ng-Playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    @section('css')
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css">
    @show
  </head>
  <body>
	  <div class="container">
  	  @yield('content')
	  </div>
   </body>
   @section('scripts')
   <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
   <script type="text/javascript" src="//netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"></script>
   @show
</html>
