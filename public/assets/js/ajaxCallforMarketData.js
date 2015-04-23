
$(document).ready(function(){
	getData();
	//setInterval(highlightData, 2000);
});


function getData()
{

	$.ajax({
    type: "GET",
    url: "/getBitcoinChart",
    dataType: 'json',
    async: false,
    crossDomain : true,
    success: function(data){
   	fillTable(data);
    },
     error: function(response,text,err){
    	 alert(err);
 	 }
   });

}

function highlightData(){
//$( ".content-panel" ).toggle( "highlight" );
$(".content-panel").effect( "highlight", {color:"red"}, 1000 );

}



function fillTable(data)
{
	var tbodyId = document.getElementById("marketData");
	 for(var i =0 ; i< data.length; i++)
    {
    	var symbol = data[i].symbol ;
    	
    	var currency = data[i].currency;
    	var latest_price = data[i].ask;
    	var avg = data[i].avg; 
    	var volume = data[i].volume; 
    	var high = data[i].high; 
    	var low = data[i].low; 
    	var bid = data[i].bid; 
    	var close = data[i].close; 
		
		avg = (avg!=null) ? avg : 0;
		latest_price = (latest_price!=null) ? latest_price : 0;
		volume = (volume!=null) ? volume : 0;
		high = (high!=null) ? high : 0;
		low = (low!=null) ? low : 0;
		bid = (bid!=null) ? bid : 0;
		close = (close!=null) ? close : 0;
		
		
    	var row =  document.createElement("tr");
    	
    	var cell0 = document.createElement("td");
    	var txt0 = document.createTextNode(symbol);
    	cell0.appendChild(txt0);
    	
    	var cell1 = document.createElement("td");
    	var txt1 = document.createTextNode(currency);
    	cell1.appendChild(txt1);
    	
    	var cell2 = document.createElement("td");
    	var txt2 = document.createTextNode(latest_price);
    	cell2.appendChild(txt2);
    	
    	var cell3 = document.createElement("td");
    	var txt3 = document.createTextNode(avg);
    	cell3.appendChild(txt3);
    	
    	var cell4 = document.createElement("td");
    	var txt4 = document.createTextNode(volume);
    	cell4.appendChild(txt4);
    	
    	var cell5 = document.createElement("td");
    	var txt5 = document.createTextNode(high);
    	cell5.appendChild(txt5);
    	
    	var cell6 = document.createElement("td");
    	var txt6 = document.createTextNode(low);
    	cell6.appendChild(txt6);
    	
    	var cell7 = document.createElement("td");
    	var txt7 = document.createTextNode(bid);
    	cell7.appendChild(txt7);
    	
    	var cell8 = document.createElement("td");
    	var txt8 = document.createTextNode(close);
    	cell8.appendChild(txt8);
    		
		row.appendChild(cell0);
		row.appendChild(cell1);
		row.appendChild(cell2);
		row.appendChild(cell3);
		row.appendChild(cell4);
		row.appendChild(cell5);
		row.appendChild(cell6);
		row.appendChild(cell7);
		row.appendChild(cell8);
    	
    	tbodyId.appendChild(row);
    } 

}