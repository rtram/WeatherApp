const apikey = '8db23181c7244d96c7863fb170648573'
const api = 'http://api.openweathermap.org/data/2.5/forecast'

app.factory('cityService', function() {
    return {
        city: 'London'
    }
})

app.factory('weatherService', ['$http', function ($http) {
    return {
        getWeather: function (city, days) {
            return $http.get(`${api}?q=${city}&cnt=${days}&APPID=${apikey}`, { cache: true})
        }

    }
}])