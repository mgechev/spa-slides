demo.factory('LaptopCollection', ['$http', '$q', '$timeout', 'Config', function ($http, $q, $timeout, Config) {
    var laptops = null;
    return {
        getLaptops: function () {
            var deferred = $q.defer();
            if (laptops !== null) {
                deferred.resolve(laptops);
            } else {
                $http.get(Config.DATA_URL + '/' + Config.DATA_FILE)
                .success(function (data) {
                    laptops = data;
                    deferred.resolve(data);
                })
                .error(function (error) {
                    deferred.reject(error);
                });
            }
            return deferred.promise;
        },
        getLaptopById: function (id) {
            var laptop;
            laptops.forEach(function (l) {
                if (l.id === id) {
                    laptop = l;
                    return;
                }
            });
            return laptop;
        },
        getPhoto: function (laptop) {
            return Config.PHOTO_URL + '/' + laptop.photo;
        }
    };
}]);
