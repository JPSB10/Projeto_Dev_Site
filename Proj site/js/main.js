var RotasApp = angular.module("RotasApp",["ngRoute"])

    RotasApp.config(function($routeProvider){
        $routeProvider
        .when("/", {
            templateUrl : "./templates/home.html",
            controller: "home"
        })
        .when("/lugares", {
            templateUrl : "./templates/lugares.html",
            controller: "lugares"
        })
        .when("/experiencias", {
            templateUrl:"./templates/experiencias.html",
        })
        .when("/sobre", {
            templateUrl:"./templates/sobre.html",
            controller: "sobre"
        })
    });
    RotasApp.controller("home",function($scope,$http,$route){
        let Menu = document.getElementById("menu_aux")
        //console.log(Menu)
        if(Menu != null)
        {
            Menu.remove()
        }

    })
    
RotasApp.controller("lugares",function($scope,$http,$route){
    $scope.ArtigoFinal = []
    document.getElementById("Topo").innerHTML+="<div id='menu_aux'><a href='#/'><h1>Home</h1></a><a href='#!/lugares'><h1>Lugares</h1></a><a href='#!/sobre'><h1>Sobre</h1></a></div>"
    var ArtigoFinal = $http.get("./dados/Livros.json")
    .then(function(respone){
        // console.log(respone)
        respone.data.forEach(Livros =>{
            console.log(Livros)
            $scope.ArtigoFinal.push(Livros)
        })
    })
})

// RotasApp.controller("sobre",function($scope,$http,$route){
//     $scope.ArtigoFinal = []
//     document.getElementById("Topo").innerHTML+="<div id='menu_aux'><a href='#/'><h1>Home</h1></a><a href='#!/lugares'><h1>Lugares</h1></a><a href='#!/sobre'><h1>Sobre</h1></a></div>"
//     var ArtigoFinal = $http.get("./dados/Livros.json")
//     .then(function(respone){
//         // console.log(respone)
//         respone.data.forEach(Livros =>{
//             console.log(Livros)
//             $scope.ArtigoFinal.push(Livros)
//         })
//     })
// })