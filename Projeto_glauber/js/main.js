
var app = angular.module('blog',['ngRoute'])

//Criação de suas controllers
app.controller('home', function($scope) {
    $scope.nome = "artigos"
});


//Criação de suas controllers
app.controller('artigos_base', function($scope) {

    //Promisse para verificar os artigos inseridos na pagina

    $scope.PromFunc = async function(){
      const Res = await fetch('../data/artigos.json')
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

    //Remover o Anuncio inicial no Blog
    $scope.CloseFunc = function(){
     document.getElementsByClassName("mini_screen")[0].remove()
     document.getElementsByClassName("Black_screen")[0].remove()
    }

    //Chama a função da Promisse
     $scope.PromFunc()

});

//Configuração de criação de Rotas
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./template/main.html",
        controller:"artigos_base"
      })
    .when("/artigos", {
        templateUrl : "./template/artigos.html",
        controller:"artigos_base"
      })
      .when("/sobre", {
        templateUrl : "./template/sobre.html",
        controller:"artigos_base"
      })

  });

