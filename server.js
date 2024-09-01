const jsonServer = require( "json-server" )
const cors = require( "cors" )
const server = jsonServer.create()
const router = jsonServer.router( "db.json" ) // replace with your database file
const middlewares = jsonServer.defaults()

server.use( cors() ) // Enable CORS
server.use( middlewares )
server.use( router )

server.listen( 3001, () => {
  console.log( "JSON Server is running on http://localhost:3001" )
} )
