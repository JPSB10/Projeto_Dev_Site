fetch ('./dados/Livros.json')

.then (response => response.json())
.then (json =>{
console.log (json)


let Lugares = json
//let Nomes = json.Nomes[0]["BackEnd"]
//console.log(Nomes)

Lugares.forEach(element =>{
    console.log(element)
    document.getElementById("ApiRead").innerHTML+=`<div class='livro'><h1>`+element["Titulo"]+`</h1>
    <div>`+element["Descrição"]+`</div>
    <img src='`+element["img"]+`'>
    <div> '`+element["ver"]+`' </div>
    <div>`+element["Curiosidades"]+`</div>
    </div>
     `
});
}
)

