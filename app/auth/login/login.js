angular
  .module('bandApp.login', ['ngRoute', 'firebase'])

// Declared route
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'auth/login/login.html',
      controller: 'LoginController'
    });
  }])

// Login controller
.controller('LoginController', ['$scope', '$location', 'FindUserId', '$firebaseAuth', function($scope, $location, FindUserId, $firebaseAuth) {
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
          FindUserId.setUser(user.password.email);
          $location.path('/musician-home')
        },
        function(error) {
          // Failure callback
          console.log('Authentication failure');
        });
      }
}])
  .service('FindUserId', function(){
    var user = '';
      return {
        getUser: function() {
          return user;
          },
        setUser: function(value) {
          user = value;
          }
      };
  });



