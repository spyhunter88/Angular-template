var app = angular.module('uiApp', ['ui.bootstrap', 'ngRoute', 'ui.bootstrap.transition']);

app.controller('MainCtrl', function($scope) {
    $scope.name = 'World';
});

// LinhNH13's code
app .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Car2013', {
        templateUrl: 'partials/Car2013.html'
        // controller: 'AddOrderController'
      }).
      when('/Honda', {
        templateUrl: 'partials/Motorbikes.html'
        //controller: 'ShowOrdersController'
      }).
      when('/Computer', {
      	templateUrl: 'partials/Computer/List.html',
      	controller: 'ComputerController'
      }).
      when('/Claim', {
        templateUrl: 'partials/Claim/List.html',
        controller: 'ClaimController'
      }).
      otherwise({
        redirectTo: '/Car2013'
      });
 }]);