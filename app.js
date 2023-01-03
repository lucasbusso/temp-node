const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end('Home page')
    return
  }
  if(req.url === '/about') {
    //BLOCKING CODE !!!!
    for(let i = 0; i<1000; i++) {
      for(let k = 0; k<1000; k++) {
        console.log(`${i} ${k}`)
      }
    }
    res.end('About page')
    return
  }
  res.end("Error")
})

server.listen(5001, () => {
  console.log("Server listening on port 5000")
})