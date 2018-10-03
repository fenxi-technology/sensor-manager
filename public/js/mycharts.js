// https://redstapler.co/javascript-realtime-chart-plotly/
// https://plot.ly/javascript/line-charts/

var TESTER;
var data= { x: [1, 2, 3, 4, 5],
            y: [1, 2, 4, 8, 16] 
    }

function initTemp(htmlElement){
    Plotly.plot( htmlElement, [
        data], { 
        margin: { t: 0 } } );

    console.log( Plotly.BUILD );
}


function init(){

     Plotly.plot('graph',[{
            y:[getData()],
            type:'line'
    }]);

    // setInterval(function() {
    //   Plotly.extendTraces('graph', { y: [[getData()]] }, [0])
    // }, 400);
}

function getData() {
         return Math.random();
}