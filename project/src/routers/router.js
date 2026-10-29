const express = require("express");
const router = express.Router();

router.get("/", (req, resp) => {
    resp.send("First Page (/)");
});

router.get("/main", (req, resp) => {
    resp.sendFile(__dirname+"/public/main.html");
});

router.get("/add", (req, resp) => {
    resp.sendFile(__dirname+"/public/add.html");
});


module.exports = router;
