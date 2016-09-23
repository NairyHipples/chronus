var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'app/partials/home/home.html',
      controller: 'navController'
    })
    .when('/help', {
      templateUrl: 'app/partials/help/help.html',
      controller: 'navController'
    })
    .when('/search', {
      templateUrl: 'app/partials/search/search.html',
      controller: 'searchController'
    })
    .when('/contact', {
      templateUrl: 'app/partials/contact/contact.html',
      controller: 'navController'
    })
    .otherwise({ redirectTo: '/' });


}]);

var controllers = {};
controllers.searchController = function($scope) {
  $scope.books = [
    { name: 'J.R.R. Tolkien', title: 'The Hobbit', img: 'img/books/hobbit.jpg'},
    { name: 'Harper Lee', title: 'To Kill A Mockingbird', img: 'img/books/mockingbird.jpg'},
    { name: 'Scott Fitzgerald', title: 'The Great Gatsby', img: 'img/books/gatsby.jpg'},
    { name: 'Joseph Heller', title: 'Catch-22', img: 'img/books/22.jpg'},
    { name: 'Anthony Burgess', title: 'A Clockwork Orange', img: 'img/books/clockwork.jpg'},
    { name: 'Dr. Seuss', title: 'The Cat in the Hat', img: 'img/books/cat.png'},
    { name: 'Chris Mould', title: 'Something Wickedly Weird', img: 'img/books/wicked.jpg'},
    { name: 'George R.R. Martin', title: 'A Game of Thrones', img: 'img/books/thrones.jpg'},
    { name: 'J.D. Salinger', title: 'The Catcher in the Rye', img: 'img/books/rye.jpg' }
  ];
};

app.controller(controllers);
