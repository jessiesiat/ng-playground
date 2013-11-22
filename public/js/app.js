var ngPlayground = angular.module('ngPlayground', ['ngRoute', 'ngControllers', 'ngFilters', 'ngServices']);

/*
ngPlayground.config(['$interpolateProvider', function ($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
}]);
*/

ngPlayground.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'packages/jessiesiat/ng-playground/partials/index.html',
        controller: 'IndexCtrl'
      }).
      when('/bootstrapping', {
        templateUrl: 'packages/jessiesiat/ng-playground/partials/bootstrapping.html'
      }).
      when('/ng-templates', {
        templateUrl: 'packages/jessiesiat/ng-playground/partials/ng-templates.html',
        controller: 'NgTemplatesCtrl'
      }).
      when('/ng-filters', {
        templateUrl: 'packages/jessiesiat/ng-playground/partials/ng-filters.html',
        controller: 'NgTemplatesCtrl'
      }).
      when('/2-way-data-binding', {
        templateUrl: 'packages/jessiesiat/ng-playground/partials/2-way-data-binding.html',
        controller: 'NgTemplatesCtrl'
      }).
      when('/xhr-di', {
        templateUrl: 'packages/jessiesiat/ng-playground/partials/xhr-di.html'
      }).
      when('/routing-views', {
        templateUrl: 'packages/jessiesiat/ng-playground/partials/routing-views.html'
      }).
      when('/event-handlers', {
        templateUrl: 'packages/jessiesiat/ng-playground/partials/event-handlers.html'
      }).
      when('/users', {
        templateUrl: 'packages/jessiesiat/ng-playground/partials/users.html',
        controller: 'UsersCtrl'
      }).
      when('/users/:userId', {
        templateUrl: 'packages/jessiesiat/ng-playground/partials/user-details.html',
        controller: 'UserDetailsCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);