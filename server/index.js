const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios");
const massive = require("massive");
require("dotenv").config();

const controller = require("./controller");

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.get("/api/inventory", controller.getProducts);

const port = 3004;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
