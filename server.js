var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
    case '/index.html':
      sendFile(res, 'index.html')
      break
    case '/css/styles.css':
      sendFile(res, 'css/styles.css')
      break
    case '/processing.js':
      sendFile(res, 'processing.js')
      break
    case '/boxes/boxes.pde':
      sendFile(res, 'boxes/boxes.pde')
      break
    case '/test/test.pde':
      sendFile(res, 'test/test.pde')
      break
    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

function sendFile(res, filename) {

  switch(filename) {
    default:
    case 'index.html':
      fs.readFile(filename, function (error, content) {
        res.writeHead(200, {'Content-type': 'text/html'})
        res.end(content, 'utf-8')
      })
      break
    case 'css/styles.css':
      fs.readFile(filename, function(error, content) {
        res.writeHead(200, {'Content-Type': 'text/css'})
        res.end(content, 'utf-8')
      })
      break
    case 'processing.js':
      fs.readFile(filename, function(error, content) {
          res.writeHead(200, {'Content-Type': 'text/javascript'})
          res.end(content, 'utf-8')
      })
      break
    case 'boxes/boxes.pde':
    case 'test/test.pde':
        fs.readFile(filename, function(error, content) {
            res.writeHead(200, {'Content-Type': 'text/pde'})
            res.end(content, 'utf-8')
        })
        break
  }

}
