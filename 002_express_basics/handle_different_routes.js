const express = require('express')
const app = express()

app.use('/', (res, req, next) => {
   console.log('In the Middleware')
   res.send('<h1>Hello from express</h2>')
})


   

server.listen(3000)