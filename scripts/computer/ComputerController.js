app.controller('ComputerController', function($scope, $modal, $log) {

    $scope.computer = {
      id: 0,
    	cpu: 'Haswell',
    	ram: '8 GB',
    	hdd: '1TB'
    };

    $.getJSON('json-data/computers.json', function(data) {
    	$scope.computers = data.computers;
    	$scope.$apply();
    });

    $scope.saveComputer = function() {
    	alert(123);
    };

    $scope.editComputerModal = function(computer) {
        // alert('Save ' + computer.cpu);
        var modalInstance = $modal.open({
          templateUrl: 'templates/ComputerModal.html',
          controller: ComputerModalCtrl,
          resolve: {
            computer: function () {
              return computer;
            }
          }
        });

        modalInstance.result.then(function (computer) {
          // $scope.selected = selectedItem;
          alert(computer.cpu);
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      // };
    };

    $scope.deleteComputer = function(computer) {
        alert('Delete ' + computer.cpu);
    };
});

// Use for Computer Form
app.controller('ComputerFormCtrl', function($scope, $routeParams) {
  $scope.computer = {
      id: $routeParams.computerId,
      cpu: 'Haswell',
      ram: '8 GB',
      hdd: '1TB'
    };

  $scope.saveComputer = function() {
    alert(312);
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.
var ComputerModalCtrl = function ($scope, $modalInstance, computer) {

  $scope.computer = computer;

  $scope.ok = function () {
    alert($scope.computer.id);
    $modalInstance.close($scope.computer);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};