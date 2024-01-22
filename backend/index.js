const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function setupAnsStartServe() {
  app.listen(3000, () => {
    console.log("server started at 3000");
  });
}

setupAnsStartServe();
