//* GOODREADS API -- TRABAJAR NUESTRO PRIMER CRUD
//* DOCUMENTACIÓN: https://goodreads-devf-aaron.herokuapp.com/docs/
//* URI DE LA API: https://goodreads-devf-aaron.herokuapp.com/api/v1/ 

//* 1) TRAER A LOS PAQUETES QUE VAMOS A UTILIZAR (REQUEST)
 const request = require('request')

//* 2) TENER NUESTRO ENDPOINT
 const URI = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'

 //? LISTA A TODOS LOS AUTORES (AUTHORS)
   const listAuthors = () => {
        request.get(URI, (error,response,body)=>{
            if(response.statusCode === 200){
                const authors = JSON.parse(body)
                console.log(authors)
            }else{
                console.log(response.statusCode , response.statusMessage)
            }           //       404                     NOT FOUND 
        })
   }

//* LISTAR UN AUTOR POR SU ID 
 const getAuthor = (id) => {
        request.get(URI+id+'/' , (error,response,body)=> {
            if(response.statusCode === 200){
                const author = JSON.parse(body)
                console.log(author)
            }else{
                console.log("ID NO VALIDO: " , response.statusCode , response.statusMessage)
            }                               //       404                     NOT FOUND
        })
 } 

//* CREAR UN AUTHOR - USAMOS UN OBJETO CON INFORMACION A CREAR Y PARA ELLO NECESITAMOS USAR UN FORMATO JSON
    const createAuthor = (jsonData) => {
        const objConfig = {
            url: URI, //APARTADO PARA CREAR EL AUTOR /api/v1/authors/
            form: jsonData // ESTA ES MI DATA EN FORMATO JSON
        }

        //HACER LA PETICIÓN
        request.post(objConfig, (error,response,body) => { 
            if(response.statusCode === 201){
                const createAuthor = JSON.parse(body)
                console.log("AUTOR CREADO EXITOSAMENTE", createAuthor)
            }else{
                console.log(response.statusCode,response.statusMessage)
            }             //       404                     NOT FOUND
        })
    }

//* PARTIAL UPDATE DE UN AUTOR 
        const patchAuthor = (id, jsonData) => {
            const objConfig = {
                url: URI+id+'/' ,
                form: jsonData // ESTA ES MI DATA EN FORMATO JSON
            }

            request.patch(objConfig, (error,response,body) => {
                if(response.statusCode === 200){
                    const author = JSON.parse(body)
                    console.log(author)
                }else{
                    console.log(response.statusCode,response.statusMessage)
                }            //       404                     NOT FOUND
            })
        }

//* ELIMINAR UN AUTOR
    const deleteAuthor = (id) => {
        request.delete(URI+id+'/',(error,response,body) => {
            if(response.statusCode === 204) {
                console.log("el autor fue eliminado exitosamente")
            }else{
                console.log(response.statusCode,response.statusMessage)
            }
        })
    }


module.exports = {
    listAuthors,
    getAuthor,
    createAuthor,
    patchAuthor,
    deleteAuthor
}