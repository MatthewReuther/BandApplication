
angular
  .module('bandApp.register', ['ngRoute', 'firebase'])


// Declared route
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/register', {
        templateUrl: 'auth/register/register.html',
        controller: 'RegisterController'
      });
  }])

// Register controller
  .controller('RegisterController', ['$scope','$firebaseAuth', function($scope,$firebaseAuth) {
    var firebaseObj = new Firebase("https://bandapplication.firebaseio.com/");
    var auth = $firebaseAuth(firebaseObj);
    //gets email addresses and password from scope and createUser
    $scope.signUp = function() {
      if(!$scope.regForm.$invalid) {
        //console.log('yo it works');
        var email    = $scope.user.email;
        var password = $scope.user.password;
        if (email && password) {
          auth.$createUser(email, password)
            .then(function (){
              //create user if successful
              console.log('Created User Successfully');
            }, function(error) {
              // failed creating user
              console.log(error);
          });
      }
    }
  };
}]);