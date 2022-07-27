//import SpotifyWebApi from "spotify-web-api-node"
//import {} from "dotenv/config"
//import hbs from "hbs"
//import express from "express"
//console.log("Este es mi ID")
require("dotenv").config()
console.log(process.env.CLIENT_ID)
var clientId = process.env.CLIENT_ID
var clientSecret = process.env.CLIENT_SECRET
//import bodyParser from "body-parser"
//import rutas from "./rutasjs/rutas.js"
var SpotifyWebApi = require('spotify-web-api-node');
const express = require('express')
const app = express()
const hbs = require('hbs')
const bodyParser = require('body-parser')
const rutas = require("./rutasjs/rutas")

//configurar express para comunicar node con vistas html

app.use(express.static("public"))

app.use("/",rutas)

app.set("views",__dirname+"/views")
app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({extended:true}))



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

app.listen(3000,()=>{

  console.log("conexion Realizada")
})

/*
  const consultarApiSpotify = async(artista)=>{
    spotifyApi.clientCredentialsGrant().then(
        function(data) {
          console.log('The access token is ' + data.body['access_token']);
          spotifyApi.setAccessToken(data.body['access_token']);
          return spotifyApi.searchArtists(artista)
        }
      ).then(function(data){
            var artistas = data.body.artists.items
            //console.log(artistas)
            return artistas[0]
      }).then(function(data){
        var artistaid = data.id
        //console.log(artistaid)
        return spotifyApi.getArtistAlbums(artistaid)
      }).then(function(data){
        var album = data.body.items[0].id

        return spotifyApi.getAlbumTracks(album)
      }).then(function(data){
        console.log(data.body.items)
      })    
  }


 consultarApiSpotify("My chemical romance")*/
//console.log("idArtista")
//console.log(idArtista)
//consultarAlbumes(idArtista)
