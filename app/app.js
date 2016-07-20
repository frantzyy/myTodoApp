'use strict';


angular.module('myTodoApp', [
    'ngRoute',
    'app.list'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    //$locationProvider.hashPrefix('!');

    $routeProvider.otherwise({
        redirectTo: '/list'
    });
}]);
