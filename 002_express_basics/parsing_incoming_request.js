const express = require('express')

const app = express()

app.use('/add-product', (req, res, next) => {
   res.send('<html<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form></htm>')
})

app.use('/product', (req, res, next) => {
   console.log(req.body)
   res.redirect('/')
})

app.use('/', (req,res,next) => {
   res.send('<html><h1>Hello from express</h1></html>')
})

app.listen(3000)