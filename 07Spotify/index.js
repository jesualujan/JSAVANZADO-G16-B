import SpotifyWebApi from "spotify-web-api-node"
import {} from "dotenv/config"
console.log("Este es mi ID")
console.log(process.env.CLIENT_ID)
var clientId = process.env.CLIENT_ID
var clientSecret = process.env.CLIENT_SECRET

var spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret,
    
  });


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


 consultarApiSpotify("My chemical romance")
//console.log("idArtista")
//console.log(idArtista)
//consultarAlbumes(idArtista)
