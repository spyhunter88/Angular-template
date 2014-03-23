app.controller('ClaimController', function($scope, $modal, $log) {

    $.getJSON('samples/json-data/claims.json', function(data) {
    	$scope.claims = data.claims;
    	$scope.$apply();
    });

    $scope.editClaimInline = function(claim) {
      alert('Edit inline: ' + claim.id);
    };

    $scope.deleteClaim = function(claim) {
        alert('Delete ' + claim.id);
    };
});

// Use for Computer Form
app.controller('ClaimFormCtrl', function($scope, $routeParams) {
  $scope.claim = {
      id: $routeParams.claimId,
      bu: 'F9',
      vendor: 'Apple',
      startDate: '04/01/2014',
      requireClaimDoc: false,
      note: ""
    };

  $scope.saveClaim = function() {
    alert(312);
  };
});