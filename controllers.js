app.controller('homeController', ['$scope', '$log', '$location', 'cityService', function ($scope, $log, $location, cityService) {
    
     $scope.city = cityService.city

    $scope.$watch('city', function () {
        cityService.city = $scope.city
    })

    $scope.submit = function () {
        $location.path('/forecast')
    }

    $log.log($scope.city)
    
}])

app.controller('forecastController', ['$scope', '$log', '$routeParams', '$q', 'cityService', 'weatherService', function ($scope, $log, $routeParams,$q, cityService, weatherService) {

    $scope.city = cityService.city
    $scope.days = $routeParams.days || '2'

    $scope.convertToFahrenheit = function (kelvin) {
        return Math.round((1.8 * (kelvin - 273)) + 32);
    }

    $scope.convertToDate = function (date) {
        return new Date(date * 1000);s 
    }

    weatherService.getWeather($scope.city, $scope.days)
        .then(function (response) {
            $scope.forecasts = response.data.list
        })

}])

app.controller('newsController', ['$scope', '$log', 'newsService', function ($scope, $log, newsService) {

    $scope.name = 'newController'

    newsService.getNews()
        .then(function (response) {
            $log.log(response)
        })

}])