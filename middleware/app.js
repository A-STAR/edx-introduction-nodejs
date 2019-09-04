const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());

app.use(morgan('dev'));

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

app.post('/transactions', (request, response) => {
  console.log(request.body);

  response.send({
    message: 'transactions'
  });
});

app.listen(3000);
