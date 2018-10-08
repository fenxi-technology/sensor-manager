// https://redstapler.co/javascript-realtime-chart-plotly/
// https://plot.ly/javascript/line-charts/

var TESTER;
var data= { x: [1, 2, 3, 4, 5],
            y: [1, 2, 4, 8, 16] 
    }

function initTemp2(htmlElement){
    Plotly.plot( htmlElement, [
        data], { 
        margin: { t: 0 } } );

    // console.log( Plotly.BUILD );
}


function init(sensor){

    console.log("Preparing to initialise: "+sensor);
    switch(sensor){
        case 'sb30':
            initPie();
            break;
        case 'TBS-1DSGT1006NE':
            initTemp();
            break;
        case 'diameter':
            initDiameter();
            break;
        default:
             Plotly.plot('graph',[{
                    y:[getData()],
                    type:'line'
            }]);
    }
    
    

    // setInterval(function() {
    //   Plotly.extendTraces('graph', { y: [[getData()]] }, [0])
    // }, 400);

    
}

let plotlyOrange='rgb(255, 127, 14)';
let plotlyGreen='rgb(44, 160, 44)';
let plotlyBlue='rgb(31, 119, 180)';
let pptRed='rgb(190, 3, 18)';
let white='rgb(255, 255, 255)';
let pm25=15;

function initPie(){

    var colors=[plotlyBlue,plotlyGreen,pptRed, plotlyOrange];
    var data = [{
      values: [65, 10, pm25, 10,],
      labels: ['O2', 'NO2', 'PM2.5', 'CO2'],
      type: 'pie',
      marker: {
          colors: colors
        },
      textfont:{
        size: 15,
        color: white
      },
      textinfo: "label+percent"
    }];
    document.getElementById('pm25').innerHTML=pm25;

    var layout = {
      height: 200,
      width: 500
    };

    Plotly.newPlot('pie1', data);
}

function initTemp(){
    var y = [];
    for (var i = 0; i < 20; i ++) {
        y[i] = Math.random();
    }

    var trace = {
        // x: x,
        y: y,
        type: 'line',
        fill: 'tozeroy',
        line: {shape: 'spline'}
      };
    var data = [trace];
    Plotly.newPlot('graph', data);
    var prepData= () => {var d=getData(); while(d<0.5) d=getData(); return d;}

    setInterval(function() {
        // x.push(getData())
      // Plotly.redraw('graph')
      Plotly.extendTraces('graph', { y: [[prepData()]] }, [0])
    }, 400);

}

function initDiameter(){
    var counter = 3;
    var trace0 = {
      x: [1],
      y: [0],
      mode: 'markers',
      marker: {
        size: [100],
        color: [plotlyBlue]
      }
    };

    var data = [trace0];

    var layout = {
      title: 'Cable Diameter',
      showlegend: false,
      yaxis: {
                        range: [0.1, -0.1]
                     }
    };

    Plotly.newPlot('graph', data, layout);
    // Plotly.deleteTraces('graph', 1);


    const iterator = func2();
    console.log(iterator.next().value);

    setInterval(function() {
      Plotly.extendTraces('graph', { x: [[counter++]], y: [[0]]}, [0])
      var size = 100*getData();
      while(size < 50)
        size = 100*getData();

      if(size>50 && size < 70)
        trace0.marker.color.push(pptRed);
      else
        trace0.marker.color.push(plotlyBlue);

      trace0.marker.size.push(size);

      if(counter > 20) {
         Plotly.relayout('graph',{
              xaxis: {
                        range: [counter-20,counter+5]
                     }
         });
      }
    }, 400);



}

function* func2() {
  yield getData();
}

function getData() {
         return Math.random();
}