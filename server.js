"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Server is running on PORT", port);
});
