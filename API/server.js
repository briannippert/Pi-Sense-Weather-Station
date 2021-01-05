//Node Server
const express = require('express')
const app = express()
const port = 80
const sqlite3 = require('sqlite3').verbose();


let db = new sqlite3.Database('../db/weather.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the weather database.');
});

app.get('/', function (req, res) {
  res.sendFile("/home/pi/Desktop/weather/index.html")
});

app.get('/getHumidity', function (req, res) {
  res.sendFile("/home/pi/Desktop/weather/humidity.csv");
});

app.get('/testDB', function (req, res) {

  let sql = `SELECT * FROM weather`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      let result = {
        "temperature": row.temperature,
        "pressure": row.pressure,
        "humidity": row.humidity,
        "time_dt": row.time_dt
      }
      res.send(result);
    });
  });

  // close the database connection
  db.close();

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))