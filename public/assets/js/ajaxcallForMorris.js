$(document).ready(function(){
	
	generateChart();
	genrateBTctoUSD();
	generateMinerRevenue();
	generateTotalTransactionPerDay();	
});

function generateTotalTransactionPerDay()
{
	var options={
			
			chart: {
				renderTo: 'transaction',
	            type: 'scatter',
	            zoomType: 'xy'
	        },
	        title: {
	            text: 'Unique Transaction by Date'
	        },
	        subtitle: {
	            text: 'Source: Heinz  2003'
	        },
	        xAxis: {
	            title: {
	                enabled: true,
	                text: 'Date'
	            },
	            categories: []
	           // startOnTick: true,
	          //  endOnTick: true,
	           // showLastLabel: true
	        },
	        yAxis: {
	        	min: 0,
	             max: 200000,
	             tickInterval: 5000,
	            title: {
	                text: 'Unique Transaction'
	            }
	        },
	        legend: {
	            layout: 'vertical',
	            align: 'left',
	            verticalAlign: 'top',
	          //  x: 100,
	          //  y: 70,
	            floating: true,
	            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
	            borderWidth: 1
	        },
	        plotOptions: {
	            scatter: {
	                marker: {
	                    radius: 5,
	                    states: {
	                        hover: {
	                            enabled: true,
	                            lineColor: 'rgb(100,100,100)'
	                        }
	                    }
	                },
	                states: {
	                    hover: {
	                        marker: {
	                            enabled: false
	                        }
	                    }
	                },
	                tooltip: {
	                    headerFormat: '<b>{series.name}</b><br>',
	                    pointFormat: ' {point.y} unique transactions'
	                }
	            }
	        },
	        series: [{
	            name: 'Transactions',
	            color: 'rgba(223, 83, 83, .5)',
	            data: []

	        }]
	}
  getDataForTransaction(options);
}

function getDataForTransaction(options)
{
	var json_p = [];
	$.ajax(
            {
    type: "GET",
    url: "https://www.quandl.com/api/v1/datasets/BCHAIN/NTRAN.json?auth_token=rxC5WhqoTPMsxy5r_xew",
    dataType: 'json',
    async: false,
    data: '{}',
   
    success: function(data){
          
       // options.series[0].name = 'Revenue';
    	//alert(data.data[0][1]);
    	//alert(data.data[0]);
    //	var temp = [];
           for(i=0;i<data.data.length;i++)
           {
        	//   temp.push(data.data[i]);
        	   	options.series[0].data.push(data.data[i][1]);
              //  options.series[0].data.push(parseInt(data.d.results[i].ERLOS)/1000000);
             
                json_p.push(data.data[i][0]);
        	 //  	temp.length=0;
            
           }
         //   options.series[0].minPointLength= 10,
            options.xAxis.categories = json_p;
            chart_bar = new Highcharts.Chart(options);
    }
        });
}
function generateMinerRevenue()
{

	var options={
			
			chart: {
				renderTo: 'minerRevenue',
	            type: 'column'
	        },
	        title: {
	            text: 'Latest 10 Revenue by Miners'
	        },
	        xAxis: {
	            categories: []
	        },
	      //  min: 100,
	        yAxis: {
	        	 min: 0,
	             max: 2000000,
	             tickInterval: 500000,
	            //min: 0,
	            title: {
	                text: 'Revenue(K)'
	            },
	            labels: {
	                formatter: function () {
	                	
	                return this.value + 'k';
	                    } 
	                }
	        },
	       
	        plotOptions: {
	            column: {
	                //stacking: 'percent'
	            }
	        },
	        series: [{
	            name: 'Revenue',
	        //   colorByPoint: true,
	            data: []
	        }]

		    
	}
	getDataForMiner(options);
}

function getDataForMiner(options)
{
	var json_c = [];
	$.ajax(
            {
    type: "GET",
    url: "https://www.quandl.com/api/v1/datasets/BCHAIN/MIREV.json?rows=10&auth_token=rxC5WhqoTPMsxy5r_xew",
    dataType: 'json',
    async: false,
    data: '{}',
   
    success: function(data){
          
       // options.series[0].name = 'Revenue';
    	//alert(data.data[0][1]);
           for(i=0;i<data.data.length-1;i++)
           {
        	   
        	  // options.xAxis.categories.push(data.data[i][0]);
        	   	options.series[0].data.push(parseFloat(data.data[i][1]));
              //  options.series[0].data.push(parseInt(data.d.results[i].ERLOS)/1000000);
             
                json_c.push(data.data[i][0]);
            
            
           }
         //   options.series[0].minPointLength= 10,
            options.xAxis.categories = json_c;
            chart_bar = new Highcharts.Chart(options);
    }
        });
	
}
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
	                text: 'Market cap'
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
	            name: 'Market cap',
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
