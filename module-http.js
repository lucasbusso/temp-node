const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end('Welcome to our home page')
    return
  }
  if(req.url === '/about') {
    res.end('Welcome to about us')
    return
  }
  res.end(`<h1>Ooops!</h1>`)
})

server.listen(5001)