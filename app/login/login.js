angular.module('bandApp.login', ['ngRoute'])

// Declared route
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'login/login.html',
      controller: 'LoginController'
    });
  }])

// Login controller
.controller('LoginController', [function() {

}]);