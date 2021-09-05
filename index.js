const express = require("express");
const cors = require("cors");
const winston = require("winston");
const routes = require("./app/routes/routes");
const app = express();
const port = process.env.PORT || 20555;

app.use(cors()); //*for http request from various origins
app.use(express.json()); //*parses incoming requests with JSON payloads and is based on body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(port, () => console.log(`Listening on port ${port}...`));
routes(app);
