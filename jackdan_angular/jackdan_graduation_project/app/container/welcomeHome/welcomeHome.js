'use strict';

angular.module('myApp.welcomeHome', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/welcomeHome', {
        templateUrl: 'container/welcomeHome/welcomeHome.html',
        controller: 'WelcomeHomeCtrl'
    });
}])

.controller('WelcomeHomeCtrl', [function ()  {

}]);