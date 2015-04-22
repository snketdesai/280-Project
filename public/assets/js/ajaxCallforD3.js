$(document).ready(function () {

	generateBubbleChart();
	generatePieChart();
	generatePieChart1();
});
function generateBubbleChart(){
 
var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 600,
    //viewBoxSize: => use @default
    innerRadius: 600 / 3.5,
    //outerRadius: => use @default
    radiusMin: 50,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default
    
   data: {
      items: [
        {text: "Blocks Mined", count: "138"},
        {text: "Time Between Blocks", count: "10.43"},
        {text: "Bitcoins Mined", count: "3450"},
        {text: "No. of Transactions", count: "1144"},
        {text: "Market Price", count: "235"},
        {text: "Trade Volume", count: "2000"},
        {text: "Total Transaction Fees", count: "15"},
      ],
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
      {
        name: "central-click",
        options: {
          //text: "(See more detail)",
          style: {
            "font-size": "12px",
            "font-style": "italic",
            "font-family": "Source Sans Pro, sans-serif",
            //"font-weight": "700",
            "text-anchor": "middle",
            "fill": "white"
          },
          attr: {dy: "65px"},
         
        }
      },
      {
        name: "lines",
        options: {
          format: [
            {// Line #0
              textField: "count",
              classed: {count: true},
              style: {
                "font-size": "28px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            {// Line #1
              textField: "text",
              classed: {text: true},
              style: {
                "font-size": "14px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "20px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "50px"},
              attr: {}
            },
            {// Line #1
              style: {"font-size": "30px"},
              attr: {dy: "40px"}
            }
          ]
        }
      }]
  });


}


function generatePieChart()
{
	var pie = new d3pie(document.getElementById("pie"), {
		size: {
			pieOuterRadius: "100%",
			canvasHeight: 360
		},
		data: {
			sortOrder: "value-asc",
			smallSegmentGrouping: {
				enabled: true,
				value: 2,
				valueType: "percentage",
				label: "Other birds"
			},
			content: [
				{ label: "okcoinCNY", value: 15 },
				{ label: "btcnCNY", value: 9 },
				{ label: "bitfinexUSD", value: 4 },
				{ label: "btceUSD", value: 3 },
				{ label: "bitstampUSD", value: 2 },
				{ label: "itbitUSD", value: 1 },
				{ label: "localbtcUSD", value: 1 },
				{ label: "krakenEUR", value: 1 }
				
			]
		}
	});

}

function generatePieChart1()
{
	var pie = new d3pie(document.getElementById("pie1"), {
		size: {
			pieOuterRadius: "100%",
			canvasHeight: 360
		},
		data: {
			sortOrder: "value-asc",
			smallSegmentGrouping: {
				enabled: true,
				value: 2,
				valueType: "percentage",
				label: "Other birds"
			},
			content: [
				{ label: "CNY", value: 30 },
				{ label: "USD", value: 8 },
				{ label: "EUR", value: 2 },
				{ label: "GBP", value: 2 },
				{ label: "SGD", value: 1 },
				{ label: "AUD", value: 1 },
				{ label: "PLN", value: 1 }
				
			]
		}
	});

}


