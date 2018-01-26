'use strict';

angular.module('myApp.collection', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/collection' ,{
        templateUrl: 'container/collection/collection.html',
        controller: 'CollectionCtrl'
    });
}])

.controller('CollectionCtrl', [function () {
    
}]);