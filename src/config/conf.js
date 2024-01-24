const express = require("express");
const path = require("path");

const config = (app) => {
    app.set('view engine', 'ejs');
    app.set('views', path.join("./src", '/views'))

    //conf static file
    app.use(express.static(path.join("./src",'public')));
}
module.exports = config;