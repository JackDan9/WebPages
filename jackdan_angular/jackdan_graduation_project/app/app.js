'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'myApp.traffic',
    'myApp.cater',
    'myApp.collection',
    'myApp.welcomeHome',
    'myApp.login',
    'myApp.register',
    'myApp.version',
    'myApp.flight',
    'myApp.chinese',
    'myApp.foreign'

]).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/login'});
}]);
