const http = require('http');

const PORT = 5000;
const HOST = 'localhost';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
});

server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

