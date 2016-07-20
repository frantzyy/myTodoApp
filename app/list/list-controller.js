'use strict';

angular.module('app.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/list', {
        templateUrl: 'list/list.html',
        controller: 'ListController'
    });
}])

.controller('ListController', [function() {

}]);
