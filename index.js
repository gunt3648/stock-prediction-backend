var express = require('express');
var http = require('http');
const cors = require('cors');

global.log = require('./function/log');

var app = express();

const host = 'localhost';
const port = '8000';

http.createServer(app).listen(port, _ => {
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
});

app.use(cors());

const stock = require('./route/stock');

app.get(path = '/', (req, res) => {
  res.status(200).send('Server works!');
  log.success(path);
});

app.use('/stock', stock);

module.exports = {
  app
};