/* services */

var ngServices = angular.module('ngServices', ['ngResource']);
 
ngServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('ng/phones/:phoneId', {}, {
      query: {method:'GET', params:{phoneId:'ng/phones'}, isArray:true}
    });
  }]);