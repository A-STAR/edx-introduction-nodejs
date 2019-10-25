const express = require('express');
const morgan = require('morgan');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(errorhandler());

const store = {};

store.accounts = [];

app.get('/accounts', (request, response) => {
  response
    .status(200) // OK
    .send(store.accounts);
});

app.post('/accounts', (request, response) => {
  const id = store.accounts.length;
  const account = request.body;

  store.accounts.push(account);

  response
    .status(201) // Created
    .send({ id });
});

app.put('/accounts/:id', (request, response) => {
  const id = request.params.id;
  store.accounts[id] = request.body;

  response
    .status(200) // OK
    .send(store.accounts[id]);
});

app.delete('/accounts/:id', (request, response) => {
  store.accounts.splice(request.params.id, 1);

  response
    .status(204) // No Content
    .send();
});

app.listen(3000);
