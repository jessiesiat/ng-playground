/* services */

var ngServices = angular.module('ngServices', ['ngResource']);
 
ngServices.factory('User', ['$resource',
  function($resource){
    return $resource('ng/api/users/:userId', {}, {
      query: {method:'GET', params:{userId:''}, isArray:true}
    });
  }]);