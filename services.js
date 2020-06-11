const weatherAPIKey = '8db23181c7244d96c7863fb170648573'
const weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast'

const newsAPI = 'https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/'
const newsAPIKey = "ce146a3558mshe03ca04aa0d59bfp151b0ejsn2b89a2e8001b"

app.factory('cityService', function() {
    return {
        city: 'London'
    }
})

app.factory('weatherService', ['$http', function ($http) {
    return {
        getWeather: function (city, days) {
            return $http.get(`${weatherAPI}?q=${city}&cnt=${days}&APPID=${weatherAPIKey}`, { cache: true})
        }

    }
}])

const newsConfig = {
    "method": 'GET',
    "headers": {
		"x-rapidapi-host": "microsoft-azure-bing-news-search-v1.p.rapidapi.com",
        "x-rapidapi-key": newsAPIKey,
        "cache": "true"
    }
}

app.factory('newsService', ['$http', function ($http) {
    return {
        getNews: function () {
            return $http.get(newsAPI, newsConfig)
        }
    }
}])
