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
  res.render('TBS-1DSGT1006NE', { title: 'Temp Sensor 1', message: 'Temperature Warning', sensor: 'TBS-1DSGT1006NE', image: 'TBS-1DSGT1006NE'})
})

app.get('/w150', function (req, res) {
  res.render('w150', { title: 'Proximity Sensor 1', message: 'Proximity 1', sensor:'w150', image: 'w150' })
})

app.get('/sb30', function (req, res) {
  res.render('air', { title: 'Air Quality', message: 'Air Quality', sensor:'sb30', image: 'sb30' })
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
      //map human readable urls to sensors
      // console.log(sensor);
      switch(sensor){
        case 'diameter':
            senser='inspectorp65x';
            break;
        default:
            senser = sensor;
      }
      res.render(sensor, { title: 'Sensor '+sensor, message: 'Sensor '+sensor, sensor: sensor, image: senser })
      // res.render('generic', { title: 'Sensor '+sensor, message: 'Sensor '+sensor, sensor: sensor })
    })
}
