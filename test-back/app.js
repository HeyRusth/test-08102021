var express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    limit: "300mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(express.static("public"));
app.use(cors({ origin: "http://localhost:4200" }));

/**
 * RCV 08/11: Required by mongoose , solution for earlier version
 */
require("./module/facturation");
require("./module/user");
require("./module/provenance");
require("./module/client");

// connecting to mongodb
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
mongoose
  .connect(
    `mongodb+srv://E-learning-Project:E-learning-Project@cluster0.gq6ri.mongodb.net/test`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("connected to mongodb successfully"))
  .catch((err) => console.log("couldnt connect to mongodb" + err));

//delegating a router to a given url

/**
 * ROUTE & FALLBACK HANDLER FOR ERROR
 */
const dossierRoutes = require("./route/dossier");
app.use("/dossier", dossierRoutes);

const errorController = require("./controller/error");
app.use(errorController);


//choose the backend port
const port = process.env.PORT || 3002;

app.use("/public", express.static(__dirname + "/public"));

//starting the backend server
app.listen(port, () => console.log("listening on port:" + port));

module.exports = app;
