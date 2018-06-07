'use strict';

angular.module('myApp.cater', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cater', {
    templateUrl: 'container/cater/cater.html',
    controller: 'CaterCtrl'
  });
}])

.controller('CaterCtrl', [function() {

}]);