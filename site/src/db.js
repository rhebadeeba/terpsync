import mysql from 'mysql2';

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

const getEvents = (callback) => {
  const query = 'SELECT * FROM events';
  con.query(query, (err, results) => {
      if (err) {
          console.error("Error executing query:", err);
          return callback(err);
      }
      callback(null, results);
  });
};

export { con, getEvents };