const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const rendertron = require("rendertron-middleware");
const port = process.env.PORT || 8000;

const app = express();

const BOTS = rendertron.botUserAgents.concat("googlebot");
const BOT_UA_PATTERN = new RegExp(BOTS.join("|"), "i");

app.use((req, res, next) => {
  res.header("Cache-Control", "max-age=86400000");
  next();
});

app.use(
  rendertron.makeMiddleware({
    proxyUrl: "https://render-tron.appspot.com/render",
    userAgentPattern: BOT_UA_PATTERN
  })
);

app.use(
  "/",
  expressStaticGzip("dist", {
    enableBrotli: true,
    orderPreference: ["br", "gz"]
  })
);

app.listen(port);

console.info(`Project is running at http://localhost:${port}`);
