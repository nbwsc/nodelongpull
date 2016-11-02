const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
console.log(process.version)
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  setTimeout(function(){
      res.end('Hello World\n');
  },1000*1000)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});