'use strict';

angular.module('myApp.foreign', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/cater/foreign', {
        templateUrl: 'container/cater/foreign/foreign.html',
        controller: 'ForeignCtrl'
    });
}])

.controller('ForeignCtrl', [function () {

}]);