angular

  //allows to define routes
  .module('bandApp', ['ngRoute', 'bandApp.login', 'bandApp.register', 'bandApp.musician-home'])

  //$routeProvider which is useful for configuring routes define our routes in its callback function
  .config(['$routeProvider', function($routeProvider) {
    // Routes will be here

    // Set defualt view of our app to login
    $routeProvider
      .otherwise ({
        redirectTo: '/login'
    });
  }]);

