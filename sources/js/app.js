/**
 * Main Module
 * @type {module}
 */

var footApp = angular.module('footApp', [
    'ngRoute',
    'footControllers',
    'footFilters',
    'footServices'
]);

footApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/teams', {
                templateUrl: 'templates/pages/team-list.html',
                controller: 'TeamListCtrl'
            }).
            when('/phones/:phoneId', {
                templateUrl: 'partials/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            }).
            otherwise({
                redirectTo: '/teamsX'
            });
    }]);