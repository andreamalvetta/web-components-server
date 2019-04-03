const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const port = process.env.PORT || 8000;

const app = express();

app.use(
  '/',
  expressStaticGzip('dist', {
    enableBrotli: true,
    orderPreference: ['br', 'gz']
  })
);
app.listen(port);

console.info(`Project is running at http://localhost:${port}`);
