const http = require('http');

http.createServer((req, res) => {
  res.end('Hello from GitHub → ECS Pipeline 🚀');
}).listen(3000);