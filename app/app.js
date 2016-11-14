var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'app/partials/home/home.html',
      controller: 'navController'
    })
    .when('/play-inspiration', {
      templateUrl: 'app/partials/play-inspiration/play-inspiration.html',
      controller: 'playController'
    })
    .when('/book', {
      templateUrl: 'app/partials/book/book.html',
      controller: 'bookController'
    })
    .when('/info', {
      templateUrl: 'app/partials/info/info.html',
      controller: 'navController'
    })
    .otherwise({ redirectTo: '/' });


}]);

var controllers = {};
controllers.bookController = function($scope) {
  $scope.books = [
    { name: 'Samuel West & Niklas Madsen', title: 'Playful Office', img: 'img/books/clockwork.jpg'}

  ];
};
controllers.playController = function($scope){
  $scope.plays = [
    { title: 'Shoot your coworker during a meeting with a nerf gun to get his/her attention.'}
  ];
};

app.controller(controllers);
