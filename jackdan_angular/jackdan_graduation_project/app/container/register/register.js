'use strict';

angular.module('myApp.register', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/register', {
       templateUrl: 'container/register/register.html',
        controller: 'RegisterCtrl'
    });
}])

.controller('RegisterCtrl', [function () {

}]);