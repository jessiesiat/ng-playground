/* ng controllers here! */

var ngControllers = angular.module('ngControllers', []);

ngControllers.controller('IndexCtrl', ['$scope', 
	function($scope) {
		$scope.author = 'Jessie Siat';
		$scope.today = new Date().getTime();;
	}]);

ngControllers.controller('NgTemplatesCtrl', ['$scope', 
	function($scope) {
		$scope.users = [
		    {'name': 'John Doe',
		     'email': 'johndoe@example.com',
		 	 'happy': false,
		 	 'age': 38 },
		    {'name': 'Juan Dela Cruz',
		     'email': 'juandelacruz@example.com',
		 	 'happy': true, 
		 	 'age': 25 }
		  ];
		  $scope.orderProp = 'age';
	}]);

ngControllers.controller('UsersCtrl', ['$scope', '$http',
	function ($scope, $http) {

	  $http.get('ng/api/users').success(function(data) {
	    $scope.users = data;
	  });

	}]);

ngControllers.controller('UserDetailsCtrl', ['$scope', '$routeParams', '$http',
	function ($scope, $routeParams, $http) {

	  $http.get('ng/api/users/' + $routeParams.userId).success(function(data) {
	    $scope.user = data;
	  });

	}]);
