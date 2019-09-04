const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let profile = {
  username: 'azat',
  email: '[reducted]',
  url: 'http://azat.co'
};

app.get('/profile', (request, response) => {
  response.send(profile);
});

app.post('/profile', (request, response) => {
  profile = request.body;

  console.log('created', profile);

  response.sendStatus(201); // Created
});

app.put('/profile', (request, response) => {
  Object.assign(profile, request.body);

  console.log('updated', profile);

  response.sendStatus(204);
});

app.delete('/profile', (request, response) => {
  profile = {};

  console.log('deleted', profile);

  response.sendStatus(204);
});

app.listen(3000);
