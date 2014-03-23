'use strict';

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/computerForm/:computerId', {
	        templateUrl: 'partials/Computer/Form.html',
	        controller: 'ComputerFormCtrl'
	    });
	}
]);