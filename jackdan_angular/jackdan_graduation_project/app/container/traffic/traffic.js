'use strict';

angular.module('myApp.traffic', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/traffic', {
    templateUrl: 'container/traffic/traffic.html',
    controller: 'TrafficCtrl'
  });
}])

.controller('TrafficCtrl', ['$scope', '$http', '$resource', function($scope, $http, $resource) {
  $http.get("json/test.json").success(function (data) {
    // alert(freetrial);
    $scope.data = data.freetrial;
    console.log($scope.data);
  });
}]);
// .controller('TrafficCtrl', ['$scope', '$resource', function($scope, $resource) {
// }]);