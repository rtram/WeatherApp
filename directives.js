app.directive('weatherReport', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
})

app.directive('articleCard', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/articleCard.html',
        replace: true,
        scope: {
            imgUrl: "@",
            title: "@",
            url: "@",
            description: "@",
            newsSource: "@"
        }
    }
})