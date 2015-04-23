
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , request = require('request')
  , cors = require('cors');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
// app.get('/', function(req, res){
//   res.sendfile(path.join(__dirname+'/public/Theme/index.html'));
// });

//app.get('/users', user.list);
app.get('/getBitcoinChart',function(req,response){
	//http://api.bitcoincharts.com/v1/markets.json
	request({
	    url: 'http://api.bitcoincharts.com/v1/markets.json',
	    json: true
	}, function (error, res, body) {

	    if (!error && res.statusCode === 200) {
	        console.log(body); // Print the json response
	        response.send(body);
	    }
	})
});
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
