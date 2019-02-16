//Node Server
const express = require('express')
const app = express()
const port = 80
 
app.get('/', function (req, res) {
    res.sendFile("/home/pi/Desktop/weather/index.html")
});
 
app.get('/getHumidity', function (req, res) {
    res.sendFile("/home/pi/Desktop/weather/humidity.csv");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))