const http = require('http');

const port = 3000;

const data = JSON.stringify({
  foo: 'bar'
});

http
  .createServer((request, response) => {
    response.writeHead(404, {
      'Content-Type': 'text/plain',
      'Content-Length': Buffer.byteLength(data)
    });

    response.statusCode = 200;

    response.write('Hello');
    response.end(' World\n\n');
  })
  .listen(port);

console.log(`Server running at http://localhost:${port}`);
