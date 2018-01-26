'use strict';

angular.module('myApp.flight', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/traffic/flight', {
        templateUrl: 'container/traffic/flight/flight.html',
        controller: 'FlightCtrl'
    });
}])

.controller('FlightCtrl', ['$scope', '$http', '$resource', function ($scope, $http, $resource) {
    $http.get("json/flight.json").success(function (data) {
        $scope.data = data.content;
        console.log($scope.data);
    });
}]);