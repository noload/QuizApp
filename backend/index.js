const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const adminRouter = require("./routes/admin");

const studentRouter = require("./routes/student");
const { PORT } = require("./config/serverConfig");
async function setupAnsStartServe() {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/admin", adminRouter);
  app.use("/student", studentRouter);

  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
  });
}

setupAnsStartServe();
