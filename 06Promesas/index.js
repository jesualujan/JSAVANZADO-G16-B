console.log("Promesas")
import fetch from "node-fetch"
//Math.ceil    redondea hacia arriba
//Math.floor   redondea hacia abajo
//Math.random  genera un numero aleatorio entre 0 y 1 (multiplicar entre el numero que nosotros queramos)

const promesaEjemplo= ()=>{
    return new Promise((resolve,reject)=>{
        const numeroAleatorio = Math.ceil(Math.random()*10)
        setTimeout(()=> numeroAleatorio >=5 ? resolve(numeroAleatorio):reject(new Error(`El ${numeroAleatorio} es menor que 5`)),3000)
    })
}
// para ejecutar una promesa, accedemos a .then() para recibir el resolve y a .catch para recibir el reject
//promesaEjemplo().then(numero=>{
//    console.log(numero)
//}).catch(error=> console.log(error+" este es el error de mi primera promesa")) 

const funcionAsincrona = async()=>{
    try{
        const respuesta = await promesaEjemplo()
        console.log(`Trae respuesta de mi promesa con async ${respuesta}`)

    } catch(error){
        console.log(error)

    }
}

//funcionAsincrona()



console.log("Ejercicios API")
//EJERCICIO 1 



const urlBook = "http://openlibrary.org/search.json?q=i+robot"

//const response =  await fetch(urlBook)
//const responseJson = await response.json()

//console.log(responseJson.docs[0].title_suggest)
//console.log(responseJson.docs[0].author_name)

//EJERCICIO 2
const urlAuthor = "http://openlibrary.org/search.json?author=asimov"

async function queryAuthor(urlA){
      var urlLibro = "https://openlibrary.org/api/books?bibkeys=ISBN:"
      const responseA = await fetch(urlA)
      const responseAJson = await responseA.json()
      const arreglo = responseAJson.docs
      const codigos = arreglo[0].isbn
      var arregloPromesas = []
      var arregloLibros = []
      codigos.forEach(async (elementos)=>{
            let promesa  = fetch(urlLibro+elementos).then((r)=>r)
            arregloPromesas.push(promesa)             
            
      })
      
      return new Promise((resolve)=>{
        Promise.all(arregloPromesas).then((proms)=>{
            proms.forEach((p)=>arregloLibros.push(p))
        }).then(()=>resolve(arregloLibros))
      })
      //arreglo.forEach(e=>{
      //        console.log(e.title)

      // })
}
var respuestaQueryLibros = await queryAuthor(urlAuthor)
console.log(respuestaQueryLibros)
//EJERCICIO 3
const urlMusica = "https://theaudiodb.com/api/v1/json/2/search.php?s=coldplay"
const responseMusica = await fetch(urlMusica)
const responseMJson = await responseMusica.json()

//console.log(responseMJson.artists[0].strGenre)