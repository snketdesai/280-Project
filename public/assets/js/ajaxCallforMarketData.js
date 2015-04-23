
$(document).ready(function(){
	getData();
});


function getData()
{
//alert("15");
	$.ajax({
    type: "GET",
    url: "/getBitcoinChart",
    dataType: 'json',
    async: false,
    crossDomain : true,
   // jsonpCallback: 'apiStatus',
    //jsonp : 'callback',
    success: function(data){
         // alert("ankit");
          //console.log("...");
    	
    },
    //jsonpCallback: 'mycallback',
     error: function(response,text,err){
    	 alert(err);
    	 //var r = jQuery.parseJSON(response.responseText);
         //alert("Message: " + r.Message);
         //alert("StackTrace: " + r.StackTrace);
         //alert("ExceptionType: " + r.ExceptionType);
 	 }
   });
	
	function apiStatus()
	{
		alert("yes");
	}
	/*$.getJSON("http://api.bitcoincharts.com/v1/markets.json?callback=?",
		    function(data){
				alert("k");
		      $.each(data, function(i,item){            
		        alert(item.x);
		      });
		  });*/

}

function fnsuccesscalllback(){
alert("23");
}