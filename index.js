const express = require('express') // importamos express desde node_modules
const server = express() // lo invocamos y lo guardamos en una variable
const port = 3000


// EJEMPLO DE LA RUTA GET AL ENDPOINT /RUTAS
server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.get("/ejemplo", (req, res) => {
    res.send('pruebas')
}); 


server.listen(port, () => {
  console.log(`Servidor levantado en el puerto ${port}`)
})
server.get("/ejemplo") 

