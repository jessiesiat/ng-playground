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

ngControllers.controller('UsersCtrl', ['$scope', '$http', 'User',
	function ($scope, $http, User) {
		$scope.users = User.query();
	}]);

ngControllers.controller('UserDetailsCtrl', ['$scope', '$routeParams', 'User',
	function ($scope, $routeParams, User) {

		 $scope.user = User.get({userId: $routeParams.userId});

	}]);
