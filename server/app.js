const express = require("express");
const connection = require('../config/dbConnection');
const cors = require("cors");

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());


app.use("/v1", require("../routes/router"));





module.exports = app;