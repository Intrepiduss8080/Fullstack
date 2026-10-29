const express = require("express");

const port = 8080;
const app = express();

app.use(require("./routers/router"));


app.listen(port);
