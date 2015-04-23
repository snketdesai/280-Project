$(document).ready(function(){
	getBitcoinCurrencyData();
	setInterval(getBitcoinCurrencyData, 5000);
});

function getBitcoinCurrencyData(){
	//alert("getBitcoinCurrencyData called");
	$.getJSON('https://bitpay.com/api/rates', 
    	function (data) {
    	data.forEach(function(dataElement){
    		if(dataElement.code == "USD"){
    			$('#usd').text(dataElement.rate.toFixed(2)).fadeIn();
    		}

    		if(dataElement.code == "EUR"){
    			$('#eur').text(dataElement.rate.toFixed(2)).fadeIn();
    		}

    		if(dataElement.code == "GBP"){
    			$('#gbp').text(dataElement.rate.toFixed(2)).fadeIn();
    		}

    		if(dataElement.code == "JPY"){
    			$('#jpy').text(dataElement.rate.toFixed(2)).fadeIn();
    		}

    		if(dataElement.code == "INR"){
    			$('#inr').text(dataElement.rate.toFixed(2)).fadeIn();
    		}
    	});
    });
}


function gen() {
    $.getJSON('https://blockchain.info/stats?format=json&callback=?', 
    	function (data) {
        console.log(data);	
    });
}