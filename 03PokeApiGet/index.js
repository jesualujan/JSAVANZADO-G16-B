//POKEAPI
//https://pokeapi.co/
//ENDPOINTS: 
//https://pokeapi.co/api/v2/pokemon/pikachu

//* 1) TRAERNOS A REQUEST
const request = require ('request')

//* 2) DECLARO MI URI DE MI API
const URI = 'https://pokeapi.co/api/v2/pokemon/'

//* 3) FUNCION QUE PIDA UN POKEMON Y ME DEVUELVA SU TIPOS

function getPokemonByName (name) {
    // ES BUENA PRACTICA REVISAR SI LA API ES SENSIBLE A MAYUSCULAS/MINUSCULAS
    // LA POKEAPI NO LO ES, Y PODRIAMOS USAR TANTO MAYUSCULAS COMO MINUSCULAS
 request.get(URI + name, function(error,response,body) {
    // si la petición es exitosa, devolvemos la data
    if(response.statusCode === 200){
        const bodyEnFormatoJs = JSON.parse(body) //Parse convierte un objeto JSON en un objeto Javascript
        const typePokemon = bodyEnFormatoJs.types.map((objeto) => objeto.type.name)
        console.log(`El tipo de ${name} es: ${typePokemon}`)
     }else {
        // SI EL CODIGO DE ESTADO ES CUALQUIER OTRO, MUESTRA UN MENSAJE DE ERROR 
        console.log(`Ocurrio un error: ${response.statusCode} ${response.statusMessage}`)
                                    //         404                   Not Found  
     }
 })
}
getPokemonByName("pikachu")
getPokemonByName("charmander")
getPokemonByName("bulbasaur")