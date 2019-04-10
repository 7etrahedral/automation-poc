const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(12000, () => console.log('Started on port 12000'));

app.post('/post', (req, res) => {
  console.log(`User name = ${req.body.username}, password is ${req.body.password}`);
  res.send({ post: 'success' });
});

app.get('/get', (req, res) => {
  res.send({ get: 'success' });
});

module.exports = app;
