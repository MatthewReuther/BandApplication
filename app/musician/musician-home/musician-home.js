  angular
  .module('bandApp.musician-home', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when ('/musician-home', {
        templateUrl: 'musician/musician-home/musician-home.html',
        controller: 'MusicianHomeController'
      });
  }])

  .controller('MusicianHomeController', ['$scope', 'FindUserId', function($scope, FindUserId) {
    $scope.username = FindUserId.getUser();
  }]);
