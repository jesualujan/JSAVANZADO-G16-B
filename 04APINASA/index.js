console.log("Estamos consumiendo la API de la NASA")
//import fetch from "node-fetch"
//variable de entorno (llave de api)
const llave = "B4M0OPihTC0U7OFZcfj6PTizGQlDsl21351VamA7"
//variables locales
let fechaInicio = "2021-11-08"
let fechaFinal = "2021-11-12"
//ENDPOINT o DIRECCION DE API A CONSULTAR
var apiNasa = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${fechaInicio}&end_date=${fechaFinal}&api_key=${llave}`
//Consultamos la api
//EJEMPLO DE METEORITOS PELIGROSOS
/*const respuestaApi = await fetch(apiNasa)
//console.log(respuestaApi)
var respuestaApiJson = await respuestaApi.json()
//console.log(respuestaApiJson.near_earth_objects)

Object.keys(respuestaApiJson.near_earth_objects).forEach(elemento=>{
    
    const meteoritos = respuestaApiJson.near_earth_objects[elemento]
    meteoritos.forEach(elem =>{
        let diamMin = elem.estimated_diameter.meters.estimated_diameter_min
        let diamMax = elem.estimated_diameter.meters.estimated_diameter_max
        let peligroso = elem.is_potentially_hazardous_asteroid
        if (diamMin > 10 && diamMax < 100000000 && peligroso){
            console.log(`El asteroide ${elem.name} mide menos de 100000000 metros y es peligroso`)
        }
    })
})
*/
//EJEMPLO DE ENDPOINT MARTE
const marte = async(rov,cam,sol)=>{
    var martianApi = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rov}/photos?sol=${sol}&camera=${cam}&api_key=${llave}`
    const resultadoMarte = await fetch(martianApi)
    const marteJson = await resultadoMarte.json()
    console.log(marteJson)
}
function traerDatos(){
    let rover = document.getElementById("roverid")
    let camara = document.getElementById("camaraid")
    let solar = document.getElementById("solarid")
    let roverv = rover.value
    let camarav = camara.value
    let solarv = solar.value
    console.log(roverv+camarav+String(solarv))
    marte(roverv,camarav,String(solarv))
}








