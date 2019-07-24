const express = require('express')
const app = express()

app.use('/users', (req, res, next) => {
   res.send('<h1>We are in /users</h1>')
})

app.use('/', (req, res, next) => {
   console.log('hello')
   res.send('<h1>hello</h1>')
   next()
})

app.listen(3000)
