var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'pages/home.html'
    })
    .when('/about',{
        templateUrl: 'pages/about.html'
    })
    .when('/product',{
        templateUrl: 'pages/product.html'
    })
    .when('/user',{
        templateUrl: 'pages/user.html'
    })
    .when('/update',{
        templateUrl: 'pages/update.html'
    })
    .otherwise({
        redirectTo: "/"
    });
    $locationProvider.html5Mode(true);
});