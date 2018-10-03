var express = require('express');
var app = express();


app.use(express.static('public'));
app.set('view engine', 'pug');

// Sensor List

// TBS-1DSGT1006NE.png - temp
// c4000advanced.jpg - safety fence
// DS60 - laser
// inspectorp65x
// s3000 - safety
// sb30 - dust
// w150 - optic 
// wlg12 - optic 

app.get('/TBS-1DSGT1006NE', function (req, res) {
  res.render('TBS-1DSGT1006NE', { title: 'Temp Sensor 1', message: 'Temperature Warning', sensor: 'TBS-1DSGT1006NE' })
})

app.get('/w150', function (req, res) {
  res.render('w150', { title: 'Proximity Sensor 1', message: 'Proximity 1', sensor:'w150' })
})

applyGenericSensorPath(app);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

function applyGenericSensorPath(app){
    app.get('/:sensor', function (req, res) {
      let sensor=req.params.sensor;
      res.render('sensor-template', { title: 'Sensor 1', message: 'Sensor 1 '+sensor, sensor: sensor })
    })
}
