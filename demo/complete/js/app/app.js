;(function (w) {
    w.demo = angular.module('demo', [])
    .config(['$routeProvider', function ($routProvider) {
        $routProvider
        .when('/', {
            templateUrl: './partials/laptops-list.html',
            controller: 'LaptopsListCtrl'
            /*  Resolve should be included: http://docs.angularjs.org/api/ng.$routeProvider  */
        })
        .when('/laptop/:id', {
            templateUrl: './partials/laptop-details.html',
            controller: 'LaptopDetailsCtrl'
            /*  Resolve should be included: http://docs.angularjs.org/api/ng.$routeProvider  */
        })
        .otherwise({
            templateUrl: './partials/404.html'
        });
    }]);;
}(window));
