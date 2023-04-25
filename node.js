const http = require('http'); //cria uma constante  que recebe a biblioteca 'http'

const hostname = '127.0.0.1'; //cria uma constante que recebe o endereço local 
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});