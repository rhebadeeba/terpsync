const express = require("express");
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "R!rich0wder1",
    database: "events"
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/api/events', (req, res) => {
  const query = 'SELECT * FROM events';
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});