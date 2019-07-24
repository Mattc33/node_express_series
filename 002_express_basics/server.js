const http = require('http')

const express = require('express')

const app = express()

app.use((res, req, next) => {
   console.log('In the Middleware')
   next() // calling next continues the journey to the next middle ware
   // allows request to continue to the next middleware
})

app.use((res, req, next) => {
   console.log('In the Middleware2')
})


const server = http.createServer(app)

server.listen(3000)
