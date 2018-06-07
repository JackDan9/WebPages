'use strict';

angular.module('myApp.chinese', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/cater/chinese', {
        templateUrl: 'container/cater/chinese/chinese.html',
        controller: 'ChineseCtrl'
    });
}])

.controller('ChineseCtrl', [function () {

}]);