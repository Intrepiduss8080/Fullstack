const express = require("express");

const app = express();


const Router = require("./routes/router.js");

app.use(express.urlencoded({ extended: true }));   // чтобы читать поля формы
app.use("/api/users", require("./routes/userRoutes"));
