//* NUESTRO JS PRINCIPAL 
const goodReadsCrud = require ('./crudAuthors.js')

//* LISTA DE TODOS LOS AUTORES
// goodReadsCrud.listAuthors()

//* LISTA UN AUTOR POR SU ID
//  goodReadsCrud.getAuthor(14786) //14573  //14773     //14781 - registro eliminado

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

//*PATCH A UN AUTOR
//  const updateData = {
//         name: "MARIA",
//         last_name: "FERNANDA",
//         biography: "Estudiante de arquitectura"
//  }
//  goodReadsCrud.patchAuthor(14786,updateData)

//*ELIMINAR UN AUTOR 
goodReadsCrud.deleteAuthor(14786)