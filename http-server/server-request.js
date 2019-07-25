const http = require('http');

const port = 3000;

http
  .createServer((request, response) => {
    console.log('Headers', request.headers);
    console.log('Method', request.method);
    console.log('Status Code', request.statusCode);
    console.log('URL', request.url);

    if (request.method === 'POST') {
      let buffer = '';

      request.on('data', function(chunk) {
        buffer += chunk;
      });

      request.on('end', function () {
        console.log(`Body: ${buffer}`);

        response.end('Accepted body\n\n');
      });
    } else {
      response.writeHead(200, {
        'Content-Type': 'text/plain'
      });

      response.end('Hello World\n\n');
    }
  })
  .listen(port);
