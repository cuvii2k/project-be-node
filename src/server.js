const mysql = require("mysql2");
var express = require('express');
require('dotenv').config();
const {connection} = require('./config/database')
var config = require('./config/conf')
const path = require('path');
const webRoutes = require("./routes/web");

var app = express();

config(app);

app.use("/",webRoutes);
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;


  //test query
  connection.query(
    'SELECT * FROM Users as u WHERE u.id = 2;',
    async function (err,res,fields) {
         console.log(res);
    }
    )


app.listen(port, hostname);
console.log(`Server is listening on : `+ hostname+ ":" + port);
