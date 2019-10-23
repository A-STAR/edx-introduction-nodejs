const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const profiles = [
  {
    username: 'azat',
    email: '[reducted]',
    url: 'http://azat.co'
  }
];

app.get('/profile', (request, response) => {
  // id from query string
  if (request.query.id) {
    return response.send(profiles[request.query.id]);
  }

  response.send(profiles);
});

app.post('/profile', (request, response) => {
  profiles.push(request.body);

  console.log('created', profiles);

  response.sendStatus(201); // Created
});

app.put('/profile/:id', (request, response) => {
  Object.assign(profiles[request.params.id], request.body);

  console.log('updated', profiles[request.params.id]);

  response.sendStatus(204);
});

app.delete('/profile/:id', (request, response) => {
  profiles.splice(request.params.id, 1);

  console.log('deleted', profiles);

  response.sendStatus(204);
});

app.listen(3000);
