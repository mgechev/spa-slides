demo.controller('LaptopDetailsCtrl', ['$scope', '$routeParams', 'LaptopCollection', function ($scope, $routeParams, LaptopCollection) {
    LaptopCollection.getLaptops()
    .then(function () {
        $scope.laptop = LaptopCollection.getLaptopById(parseInt($routeParams.id), 10);
    });
}]);
