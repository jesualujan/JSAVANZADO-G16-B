//Codigo sincrono o secuencial

console.log(1)
console.log(2)
console.log(3)

//callback function asincronicidad

const primeraFuncion = ()=>{
    console.log("Esta es la primera Funcion")
}

const segundaFuncion =()=>{
    primeraFuncion()
    console.log("Esta es la segunda Funcion")
}
const terceraFuncion =()=>{
    segundaFuncion()
    console.log("Esta es la tercera funcion")
}
//terceraFuncion()
function uno(){return 50}
function dos(){return 20}

const sumaFunciones=(funcionUno,funcionDos)=>{
    const suma = (funcionUno()*2)+ funcionDos()
    return suma

}
console.log(sumaFunciones(dos,uno))//Cuando pasamos una funcion como parametro NO PONEMOS LOS PARENTESIS

//CALLBACK en metodos de arreglos (forEach,map,reduce,filter)

var arreglo1 = ["Brenda","Leonardo","Fer","Agnes","Rene"]

arreglo1.forEach((elemento,indice,arr)=>{
    console.log(elemento)
    console.log(indice)
    console.log(arr)
})

//SETTIMEOUT es para ejecutar una funcion despues de cierto tiempo


//console.log("UNO")
//setTimeout(function(){
//    console.log("DOS")
//},4000)
//console.log("TRES")
//await y async

//  SIMULACION DE CUELLO DE BOTELLA
console.log("OscarUno")
setTimeout(()=>{
    return console.log("ErendiraDos")
},1000)
for (let i=0;i<9999999999;i++);
console.log("YaxcheTres");