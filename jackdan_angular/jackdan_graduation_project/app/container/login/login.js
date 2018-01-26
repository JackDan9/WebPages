/**
 * login module
 * */
'use strict';

angular.module('myApp.login', ['ngRoute'])

.directive('toggleClass', function () {
    return {
        restrict : '',

    }
})
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'container/login/login.html',
        controller: 'LoginCtrl'
    });
}])
.controller('LoginCtrl', [function () {

}]);