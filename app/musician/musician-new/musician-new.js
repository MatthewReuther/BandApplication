angular
  .module('bandApp.musician-new', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when ('/musician-new', {
        templateUrl: 'musician/musician-new/musician-new.html',
        controller: 'MusicianHomeController'
      });
  }])

  .controller('MusicianNewController', ['$scope', function($scope) {

  }]);
