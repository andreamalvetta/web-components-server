const express = require('express');
const serveStatic = require('express-static-gzip');
const port = process.env.PORT || 8000;

const app = express();

app.use(
  '/',
  serveStatic(__dirname + '/dist/', {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
    index: false
  })
);
app.listen(port);

console.info(`Project is running at http://localhost:${port}`);
