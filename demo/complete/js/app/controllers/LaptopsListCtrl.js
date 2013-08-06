demo.controller('LaptopsListCtrl', ['$scope', 'LaptopCollection', function ($scope, LaptopCollection) {
    $scope.laptops = [];
    LaptopCollection.getLaptops()
    .then(function (data) {
        $scope.laptops = data;
    });

    $scope.getLaptopPhoto = function (laptop) {
        return LaptopCollection.getPhoto(laptop);
    };

    $scope.removeLaptop = function (laptop) {
        $scope.laptops.splice($scope.laptops.indexOf(laptop), 1);
    };
}]);
