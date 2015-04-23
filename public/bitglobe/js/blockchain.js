"use strict";

var BlockChain = function() {
    var ws;
    
    var wsUri = 'ws://ws.blockchain.info/inv';

    var init = function() {           
        ws = new WebSocket(wsUri);
        return {
            'ws': ws,
            'start': start
        };
    };

    var dispatchSentEvent = function(data) {
        var e = new CustomEvent('sentmessage');
        e.data = data;
        ws.dispatchEvent(e);
    };

    var start = function() {
        send({"op": "unconfirmed_sub"});
    }

    var send = function(message) {
        message = JSON.stringify(message);
        dispatchSentEvent(message);
        ws.send(message);
    };

    return init();
};