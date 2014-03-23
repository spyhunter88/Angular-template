'use strict';

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/claimForm/:claimId', {
	        templateUrl: 'templates/Claim/Form.html',
	        controller: 'ClaimFormCtrl'
	    });
	}
]);