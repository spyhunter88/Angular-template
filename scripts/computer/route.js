'use strict';

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/computerForm/:computerId', {
	        templateUrl: 'templates/ComputerForm.html',
	        controller: 'ComputerFormCtrl'
	    });
	}
]);