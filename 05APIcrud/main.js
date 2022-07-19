//* NUESTRO JS PRINCIPAL 
const goodReadsCrud = require ('./crudAuthors.js')

//* LISTA DE TODOS LOS AUTORES
// goodReadsCrud.listAuthors()

//* LISTA UN AUTOR POR SU ID
 goodReadsCrud.getAuthor(14786) //14573  //14773 //14781

//* CREAR UN AUTOR 
// const jsonSend = {  
//         name: "LEO",
//         last_name: "MESSI",
//         nacionalidad: "MX",
//         biography: "EX FUTBOLISTA DEL BARCELONA",
//         gender: "M",
//         age: 33,
//         is_alive: true
//     }
// goodReadsCrud.createAuthor(jsonSend)