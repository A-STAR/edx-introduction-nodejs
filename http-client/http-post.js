const http = require('http');

const data = JSON.stringify({
  foo: 'bar'
});

const options = {
  hostname: 'mockbin.com',
  port: 80,
  path: '/request?foo=bar&foo=baz',
  method: 'POST',
  header: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(data)
  }
};

const request = http.request(options, (response) => {
  response.on('data', (chunk) => {
    console.log(`Body: ${chunk}`);
  });

  response.on('end', () => {
    console.log('No more data in response');
  });
});

request.on('error', (error) => {
  console.error(`Problem with request: ${error.message}`);
});

request.write(data);
request.end();
