/* filters */

var ngFilters = angular.module('ngFilters', []);

ngFilters.filter('expression', function() {
	return function(input) {
		return input ? ':)' : ':(';
	}
});

ngFilters.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});