var RotasApp = angular.module("RotasApp",["ngRoute"])

    RotasApp.config(function($routeProvider){
        $routeProvider
        .when("/", {
            templateUrl : "./templates/home.html",
        })
        .when("/lugares", {
            templateUrl : "./templates/lugares.html",
        })
        .when("/experiencias", {
            templateUrl:"./templates/experiencias.html",
        })
        .when("/sobre", {
            templateUrl:"./templates/sobre.html",
        })
    });

