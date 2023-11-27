var RotasApp = angular.module("RotasApp",["ngRoute"])

    RotasApp.config(function($routeProvider){
        $routeProvider
        .when("/", {
            templateUrl : "./templates/home.html",
        })
        .when("/lugares", {
            templateUrl : "./templates/lugares.html",
            // controller: "lugares"
        })
        .when("/experiencias", {
            templateUrl:"./templates/experiencias.html",
        })
        .when("/sobre", {
            templateUrl:"./templates/sobre.html",
        })
    });

    ////
RotasApp.controller(lugares,function($scope,$http,$route){
    $scope.ArtigoFinal = ""

    var ArtigoFinal = $http.get("./dados/Livros.json")
    .then(function(respone){
        respone.data.forEach(Livros =>{
            $scope.ArtigoFinal += Livros
        })


    })




})