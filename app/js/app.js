var app = angular.module("troubleshooter", [
    "ui.router",
    "ui.bootstrap"
]);


app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to home
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "app/templates/main.html"
        })
}]);

