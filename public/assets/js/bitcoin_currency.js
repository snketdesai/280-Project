$(document).ready(function(){
	getBitcoinCurrencyData();
	setInterval(getBitcoinCurrencyData, 1000);
});

function getBitcoinCurrencyData(){
    
    $.getJSON('https://bitpay.com/api/rates/USD',function(data){
        //alert(data.rate.toFixed(2));
        var last = $('#usd').html();
        if(last != data.rate.toFixed(2)){
            $('#usd').fadeOut('slow', function() {
                $('#usd').html(data.rate.toFixed(2))
                $('#usd').fadeIn('slow');
                last = data.rate.toFixed(2);
            });
        }
    });

    $.getJSON('https://bitpay.com/api/rates/EUR',function(data){
        var last = $('#eur').html();
        if(last != data.rate.toFixed(2)){
            $('#eur').fadeOut('slow', function() {
                $('#eur').html(data.rate.toFixed(2))
                $('#eur').fadeIn('slow');
                last = data.rate.toFixed(2);
            });
        }
    });

    $.getJSON('https://bitpay.com/api/rates/GBP',function(data){
   
        var last = $('#gbp').html();
        if(last != data.rate.toFixed(2)){
            $('#gbp').fadeOut('slow', function() {
                $('#gbp').html(data.rate.toFixed(2))
                $('#gbp').fadeIn('slow');
                last = data.rate.toFixed(2);
            });
        }
    });

    $.getJSON('https://bitpay.com/api/rates/JPY',function(data){
        var last = $('#jpy').html();
        if(last != data.rate.toFixed(2)){
            $('#jpy').fadeOut('slow', function() {
                $('#jpy').html(data.rate.toFixed(2))
                $('#jpy').fadeIn('slow');
                last = data.rate.toFixed(2);
            });
        }
    });

    $.getJSON('https://bitpay.com/api/rates/INR',function(data){
        var last = $('#inr').html();
        if(last != data.rate.toFixed(2)){
            $('#inr').fadeOut('slow', function() {
                $('#inr').html(data.rate.toFixed(2))
                $('#inr').fadeIn('slow');
                last = data.rate.toFixed(2);
            });
        }
    });

	//alert("getBitcoinCurrencyData called");
	// $.getJSON('https://bitpay.com/api/rates', 
 //    	function (data) {
 //    	data.forEach(function(dataElement){
 //    		if(dataElement.code == "USD"){
 //    			//$('#usd').text(dataElement.rate.toFixed(2)).fadeIn();
 //                 alert(dataElement.rate.toFixed(2));
 //                $('#usd').fadeOut('slow', function() {
 //                    $('#usd').html(dataElement.rate.toFixed(2))
 //                    $('#usd').fadeIn('slow');
 //                });
 //    		}

 //    		if(dataElement.code == "EUR"){
 //    			$('#eur').text(dataElement.rate.toFixed(2)).fadeIn();
 //    		}

 //    		if(dataElement.code == "GBP"){
 //    			$('#gbp').text(dataElement.rate.toFixed(2)).fadeIn();
 //    		}

 //    		if(dataElement.code == "JPY"){
 //    			$('#jpy').text(dataElement.rate.toFixed(2)).fadeIn();
 //    		}

 //    		if(dataElement.code == "INR"){
 //    			$('#inr').text(dataElement.rate.toFixed(2)).fadeIn();
 //    		}
 //    	});
 //    });
}


function gen() {
    $.getJSON('https://blockchain.info/stats?format=json&callback=?', 
    	function (data) {
        console.log(data);	
    });
}