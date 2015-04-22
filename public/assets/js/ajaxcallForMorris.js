$(document).ready(function(){
	
	generateChart();
	genrateBTctoUSD();
	
});

function generateChart()
{
//alert("yes");
	var options = {
	        chart: {
	        	renderTo: 'gr',
	            zoomType: 'x'
	        },
	        title: {
	            text: 'Market Capitalization'
	        },
	        subtitle: {
	            text: 'for Last 3 Years'
	        },
	        xAxis: {
	            type: 'datetime',
	            minRange: 14 * 24 * 3600000 // fourteen days
	        },
	        yAxis: {
	        	
	            title: {
	                text: 'Bitcoin Value'
	            },
	            min: 0,
	            labels: {
	                formatter: function () {
	                	
	                return this.value/1000000000 + 'M';
	                    } 
	                }
	        },
	        legend: {
	            enabled: false
	        },
	        plotOptions: {
	            area: {
	                fillColor: {
	                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
	                    stops: [
	                        [0, Highcharts.getOptions().colors[0]],
	                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
	                    ]
	                },
	                marker: {
	                    radius: 2
	                },
	                lineWidth: 1,
	                states: {
	                    hover: {
	                        lineWidth: 1
	                    }
	                },
	                threshold: null
	            }
	        },

	        series: [{
	            type: 'area',
	            name: 'Bitcoin Value',
	            pointInterval: 24 * 3600 * 1000,
	            pointStart: Date.UTC(2012, 03, 22),
	            data: [
	                
	            ]
	        }]
	        
	    }
	getData(options);
}

function getData(options)
{
	$.ajax(
            {
    type: "GET",
    url: "http://www.quandl.com/api/v1/datasets/BCHAIN/MKTCP.json?rows=1096&auth_token=rxC5WhqoTPMsxy5r_xew",
    dataType: 'json',
    async: false,
    data: '{}',
   
    success: function(data){
          
       // options.series[0].name = 'Revenue';
    	//alert(data.data[0][1]);
           for(i=data.data.length-1;i>0;i--)
           {
            
        	   	options.series[0].data.push(parseFloat(data.data[i][1]));
              //  options.series[0].data.push(parseInt(data.d.results[i].ERLOS)/1000000);
             
               // json_categories.push(data.d.results[i]["KMHI01_NAME1"]);
            
            
           }
         //   options.series[0].minPointLength= 10,
         //   options.xAxis.categories = json_categories;
            chart_bar = new Highcharts.Chart(options);
    }
        });

}
//http://www.quandl.com/api/v1/datasets/BAVERAGE/USD.json?rows=10
function genrateBTctoUSD() {

    $.getJSON('http://www.quandl.com/api/v1/datasets/BAVERAGE/USD.json?rows=25&auth_token=rxC5WhqoTPMsxy5r_xew', 
    	function (data) {
    	
        // Create the chart
        var dataTodisplay =[];
        
        data.data.forEach(function(element){
        	var dataElement = [];
        	var dateTime = moment(element[0],"YYYY-MM-DD").toDate().getTime();
        	dataElement.push(dateTime);
        	var value = element[1];
        	dataElement.push(value);
        	dataTodisplay.push(dataElement);

        });
        console.log(dataTodisplay);	
        $('#btcTOusd').highcharts('StockChart', {


            rangeSelector : {
                selected : 1
            },

            title : {
                text : 'BTC to USD'
            },

            series : [{
                name : 'USD',
                data : dataTodisplay,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    });
}
