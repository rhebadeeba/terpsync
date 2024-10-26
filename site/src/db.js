const mysql = require('mysql');
const express = require("express");

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