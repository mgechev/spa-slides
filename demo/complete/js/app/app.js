;(function (w) {
    w.demo = angular.module('demo', [])
    .config(['$routeProvider', function ($routProvider) {
        $routProvider
        .when('/', {
            templateUrl: './partials/laptops-list.html',
            controller: 'LaptopsListCtrl'
        })
        .when('/laptop/:id', {
            templateUrl: './partials/laptop-details.html',
            controller: 'LaptopDetailsCtrl'
        })
        .otherwise({
            templateUrl: './partials/404.html'
        });
    }]);;
}(window));
