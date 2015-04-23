
$(document).ready(function(){
	getData();
});


function getData()
{
//alert("15");
	$.ajax({
    type: "GET",
    url: "http://api.bitcoincharts.com/v1/markets.json?callback=?",
    dataType: 'jsonp',
    async: false,
    crossDomain : true,
  //  jsonpCallback : 'fnsuccesscalllback',
    jsonp : false,
    success: function(data){
      //    alert("ankit");
    },
     error: function(status, errorThrown){
	    console.log(status + " " + errorThrown);
 	 }
   });

}

function fnsuccesscalllback(){
alert("23");
}