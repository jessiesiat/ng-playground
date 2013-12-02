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

ngControllers.controller('UserEditCtrl', ['$scope', '$routeParams', '$location', 'User',
	function ($scope, $routeParams, $location, User) {

		 var user = User.get({userId: $routeParams.userId});

		 $scope.user_details = user;

		 $scope.saveDetails = function() {
		 	$scope.submitted = true;
		 	user.name = $scope.user_details.name;
		 	user.email = $scope.user_details.email;
		 	user.about = $scope.user_details.about;
		 	user.$save(function(u, putResponseHeaders) {
		 		$location.path('/users/' + user.id);
			  });
		 }

	}]);

ngControllers.controller('ChatCtrl', ['$scope', 'angularFire',
	function ($scope, angularFire) {
		var ref = new Firebase("https://ng-playground.firebaseio.com/");
        $scope.messages = [];
        angularFire(ref, $scope, "messages");

        $scope.addMessage = function(e) {
          if (e.keyCode != 13) return;
          $scope.messages.push({from: $scope.name, text: $scope.msg});
          $scope.msg = "";
        };
	}]);
