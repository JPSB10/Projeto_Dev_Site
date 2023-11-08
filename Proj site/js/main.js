var RotasApp = angular.module("RotasApp",["ngRoute"])

    // $scope.ler_lugares = async function(){
    //     const Res = await fetch('../dados/Lugares.json')
    //     .then(response => response.json())
    //     .then(json => {
    //     $scope.Lugares = json
    //     for (let index = 0; index < $scope.Lugares.length; index++) {
    //         document.getElementById("ListaLugares").innerHTML+=`
    //           <div class=''>
    //             <h1>`+$scope.Lugares[index]["Titulo"]+`</h1>
    //             <h3>`+$scope.Lugares[index]["Conteudo"]+`</h3>
    //           </div>`
    //     }})        
    // }
    // $scope.ler_experiencias = async function(){
    //     const Res = await fetch('../dados/experiencias.json')
    //     .then(response => response.json())
    //     .then(json => {
    //     $scope.Lugares = json
    //     for (let index = 0; index < $scope.ler_experiencias.length; index++) {
    //         document.getElementById("ListaEX").innerHTML+=`
    //           <div class=''>
    //             <h1>`+$scope.experiencias[index]["Nome"]+`</h1>
    //             <h3>`+$scope.experiencias[index]["Conteudo"]+`</h3>
    //           </div>`
    //     }})        
    // }

    // $scope.ler_lugares()
    // $scope.ler_experiencias()

    //  $scope.Chama_usuario = function(nome,conteudo){
//         $scope.lugar_escolhido = nome
//         $scope.Conteudo_dialog = conteudo
//     }

//     $scope.Fechar_dialogo = function(){
//         $scope.usuario_escolhido = ""
//     }

    // $scope.Lista_usuarios = [
    //     {
    //         "Nome":"Felipe",
    //         "conteudo":"Profesor de back end e front end"
    //     },
    //     {
    //         "Nome":"Marcos",
    //         "conteudo":"Profesor de Ed fisica"
    //     },
    //     {
    //         "Nome":"Carol",
    //         "conteudo":"Profesora de quimica"
    //     }

    // ]
// })

// ListaApp.controller('lista_secundaria',function($scope){
//     $scope.Lista_usuarios = [6,4,3,5,7]
//     $scope.Texto = ""
// })

// ListaApp.controller('principal',function($scope){
//     //Logica da pagina principal 
//     $scope.Usuario = "Felipe"
//     $scope.sexo = "M"
// })

// ListaApp.controller('lugares',function($scope,$routeParams){
//     $scope.Lugares_Disponiveis = ["tv","camisa","tenis"] 
//     $scope.Lugares_Escolhido = $routeParams['prod']
//     $scope.Lugares_Existentes = false

//     $scope.ProdutosDisponiveis.forEach(element => {
//         if(element == $scope.ProdutoEscolhido){
//             $scope.ProdutoExistente = true
//         }
//     });
//     if( $routeParams['prod'] == undefined ){
//         $scope.ProdutoExistente = true
//     }
//  }

    RotasApp.controller("sobre",function($scope){
        document.getElementById("CardSpace").remove()
        document.getElementById("wallpaper").remove()
    })
    
    RotasApp.controller("lugares",function($scope){

    })
    RotasApp.controller("expereiencias",function($scope){

    })

    RotasApp.config(function($routeProvider){
        $routeProvider
        .when("/", {
            templateUrl : "index.html",
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
        .otherwise({
            templateUrl:"index.html",
        })
    });

