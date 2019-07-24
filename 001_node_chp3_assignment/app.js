const http = require('http')

const server = http.createServer((req, res) => {
   const url = req.url

   if(url === '/') {
      res.setHeader('Content-Type', 'text/html')
      res.write('<html>')
      res.write('<head><title>My First Page</title></head>')
      res.write('<body>')
      res.write('<h1>Hello from my node.js Server!</h1>')
      res.write('<form action="/create-users" method="POST">')
      res.write('<input type="text name="username" /> <button type="submit" />')
      res.write('</form>')
      res.write('</body>')
      res.write('</html>')
      return res.end()
   }

   if(url === '/users') {
      res.setHeader('Content-Type', 'text/html')
      res.write('<html>')
      res.write('<head><title>My First Page</title></head>')
      res.write('<body>')
      res.write('<ul><li>User 1</li></ul>')
      res.write('</body>')
      res.write('</html>')
      return res.end()
   }

   if (url === '/create-users') {
      const body = []
      req.on('data', chunk => {
         body.push(chunk)
      })
      req.on('end', () => {
         const parsedBody = Buffer.concat(body).toString()
         console.log(parsedBody.split('=')[1]) 
      })
      res.statusCode = 302
      res.setHeader('Location', '/')
      res.end()
   }
})

server.listen(3000)