var app = angular.module('uiApp', ['ui.bootstrap', 'ngRoute']);

app.controller('MainCtrl', function($scope) {
    $scope.name = 'World';
});

app.controller('DropdownCtrl', function($scope) {
 
    $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];
});

// LinhNH13's code
app .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Car2013', {
        templateUrl: 'templates/Car2013.html'
        // controller: 'AddOrderController'
      }).
      when('/Honda', {
        templateUrl: 'templates/Motorbikes.html'
        //controller: 'ShowOrdersController'
      }).
      when('/Computer', {
      	templateUrl: 'templates/Computer.html',
      	controller: 'ComputerController'
      }).
      otherwise({
        redirectTo: '/Car2013'
      });
 }]);