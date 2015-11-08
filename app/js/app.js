var app = angular.module("troubleshooter", [
    "ui.router"
]);


app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to home
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "app/templates/home.html"
        })
}]);

