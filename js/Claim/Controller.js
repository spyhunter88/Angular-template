app.controller('ClaimController', function($scope, $filter, ngTableParams) {

    $.getJSON('samples/json-data/claims.json', function(data) {
    	$scope.claims = data.claims;

      $scope.tableParams = new ngTableParams({
          page: 1,            // show first page
          count: 10,          // count per page
          sorting: {
              bu: 'asc'     // initial sorting
          }
      }, {
          total: $scope.claims.length, // length of data
          getData: function($defer, params) {
              // use build-in angular filter
              $scope.orderedData = params.sorting() ?
                                  $filter('orderBy')($scope.claims, params.orderBy()) : $scope.claims;
              $defer.resolve($scope.orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
          }
      });

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