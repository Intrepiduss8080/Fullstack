const express = require("express");

const port = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./src/routers/router"));

app.listen(port);
