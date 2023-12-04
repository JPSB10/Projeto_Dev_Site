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
            controller: "experiencias"
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
        
        $scope.CloseFunc = function(){
            document.getElementsByClassName("mini_screen")[0].remove()
            document.getElementsByClassName("Black_screen")[0].remove()
            }

});
    
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

RotasApp.controller("experiencias",function($scope,$http,$route){
    $scope.nome = "artigos"
    $scope.PromFunc = async function(){
        const Res = await fetch('../dados/artigos.json')
        .then(response => response.json())
        .then(json => {
          $scope.Artigos = json
         for (let index = 0; index < $scope.Artigos.length; index++) {
          document.getElementById("art1").innerHTML+=`
          <div class='Artigo_sq'>
            <h1>`+$scope.Artigos[index]["Titulo"]+`</h1>
            <h3>`+$scope.Artigos[index]["Autor"]+`</h3>
          </div> `
         }})
      }

    $scope.PromFunc()
})