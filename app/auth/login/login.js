angular.module('bandApp.login', ['ngRoute', 'firebase'])

// Declared route
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'auth/login/login.html',
      controller: 'LoginController'
    });
  }])

// Login controller
.controller('LoginController', ['$scope','$firebaseAuth', function($scope,$firebaseAuth) {
  var firebaseObj = new Firebase("https://bandapplication.firebaseio.com/");
  var loginObj = $firebaseAuth(firebaseObj);

  $scope.SignIn = function(e) {
      event.preventDefault();  // To prevent form refresh
      var username = $scope.user.email;     //use these to bind login html data to this function
      var password = $scope.user.password;
      // Auth Logic
        loginObj.$authWithPassword( {
          email: username,
          password: password
        })
        .then(function(user) {
          // Success callback
          console.log('Authentication successful');
        },
        function(error) {
          // Failure callback
          console.log('Authentication failure');
        });
      }
}]);

