const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const app = express();
const port = 80;
const sqlite3 = require('sqlite3').verbose();

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Weather API',
    version: '1.0.0',
    description: 'A simple Express Weather API',
  },
  servers: [
    {
      url: `http://localhost:${port}`,
      description: 'Local server',
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./index.js'],
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Serve swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


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


/**
 * @openapi
 * /testDB:
 *   get:
 *     description: Retrieve data from the weather database
 *     responses:
 *       200:
 *         description: A list of weather data.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   temperature:
 *                     type: number
 *                     description: The temperature reading
 *                   pressure:
 *                     type: number
 *                     description: The pressure reading
 *                   humidity:
 *                     type: number
 *                     description: The humidity reading
 *                   time_dt:
 *                     type: string
 *                     description: The datetime of the reading
 */
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
