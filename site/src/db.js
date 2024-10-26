const express = require("express");
const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "R!rich0wder1",
    database: "events"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.end();