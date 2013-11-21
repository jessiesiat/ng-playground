<!DOCTYPE html>
<html ng-app="ngPlayground">
  <head>
    <title>Ng-Playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css">    
    <style>
    xmp {
      display: block;
      padding: 5px 9.5px;
      margin: 0 0 50px;
      font-size: 13px;
      line-height: 1.428571429;
      color: #333;
      word-break: break-all;
      word-wrap: break-word;
      background-color: #f5f5f5;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    </style>
    <script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js?lang=basic&skin=default"></script>
  </head>
  <body>
	  <div class="container">

      <h2><a href="#/">Ng Playground</a></h2>

      <div class="row">
        <div class="col-sm-4 col-md-3 col-lg-3">
          <div class="list-group">
            <a href="#/bootstrapping" class="list-group-item">Bootstrapping</a>
            <a href="#/ng-templates" class="list-group-item">Angular View & Templates</a>
            <a href="#/ng-filters" class="list-group-item">Angular Custom Filters</a>
            <a href="#/2-way-data-binding" class="list-group-item">2-way Data Binding</a>
            <a href="#/xhr-di" class="list-group-item">XHRs & Dependency Injection</a>
            <a href="#/routing-views" class="list-group-item">Routing and Multiple Views</a>
            <a href="#/event-handlers" class="list-group-item">Event Handlers</a>
          </div>
          <div class="list-group">
            <a href="#/users" class="list-group-item">Users</a>
            <a href="<?php echo URL::to('ng/hello') ?>" class="list-group-item">Say Hello!</a>   
          </div>
        </div>
        <div class="col-sm-8 col-md-9 col-lg-9">
          <div ng-view></div>
        </div>
      </div>
      <div style="margin-bottom: 55px"></div>

	  </div>
   </body>
   <!--
   <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
   <script type="text/javascript" src="//netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"></script> -->
   <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.1/angular.min.js"></script>
   <script src="packages/jessiesiat/ng-playground/js/services.js"></script>
   <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.1/angular-resource.min.js"></script>
   <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.1/angular-route.min.js"></script>
   <script src="packages/jessiesiat/ng-playground/js/app.js"></script>
   <script src="packages/jessiesiat/ng-playground/js/controllers.js"></script>
   <script src="packages/jessiesiat/ng-playground/js/filters.js"></script>
   <script src="packages/jessiesiat/ng-playground/js/directives.js"></script>
</html>
