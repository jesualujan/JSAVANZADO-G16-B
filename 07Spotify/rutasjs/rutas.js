const express = require('express')
const router =  express.Router()
var SpotifyWebApi = require('spotify-web-api-node');
require("dotenv").config()

var clientId = process.env.CLIENT_ID
var clientSecret = process.env.CLIENT_SECRET

var spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret,
    
  });

  spotifyApi.clientCredentialsGrant().then(
    function(data) {
      console.log('The access token is ' + data.body['access_token']);
      spotifyApi.setAccessToken(data.body['access_token']);
     
    },function(err){
      console.log("Sucedio un error al logearse",err)
    })


//Creo las rutas para conectar con el DOM


router.get("/",(req,res)=>{
    //res.render("home")
    console.log("Rene home ")
    const {search} =req.query
    console.log(search)
    if (search){
        spotifyApi.searchArtists(search)
        .then(data=>{
            var artistas = data.body.artists.items
            res.render("artista",{artistas})
        })

    }
    else{
        res.render("home")
    }
            
            
          

})

router.get("/artista/:id",(req,res)=>{
    const {id} = req.params
    //res.render("home")
    spotifyApi.getArtistAlbums(id)
      .then(function(data){
        var albumes = data.body.items
        console.log(albumes)
        res.render("album",{albumes})
        
      })
    
})
            
            
          



module.exports = router