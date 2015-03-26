
angular.module('bandApp.register', ['ngRoute'])

// Declared route
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/register', {
      templateUrl: 'auth/register/register.html',
      controller: 'RegisterController'
    });
}])

// Register controller
.controller('RegisterController', [function() {

}]);