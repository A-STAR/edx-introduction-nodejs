const express = require('express');

const app = express();

app.use((request, response, next) => {
  console.log(`${request.method}: ${request.url}`);

  next();
});

app.use((request, response, next) => {
  if (request.query.api_key) {
    next();
  } else {
    response
      .status(401)
      .send({
        message: 'Not authorized'
      });
  }
});

app.get('/', (request, response) => {
  response.send({
    message: 'hello world'
  });
});

app.get(
  '/accounts',
  (request, response, next) => {
    console.log('accounts inline middleware');

    next(new Error('oopps'));
  },
  (request, response) => {
    response.send({
      message: 'accounts'
    });
  }
);

app.get('/transactions', (request, response) => {
  response.send({
    message: 'transactions'
  });
});

app.listen(3000);
