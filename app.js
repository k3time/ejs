var express = require('express'); // Third party module
var app = express(); // Initailising express or creating instance of it

var routes = require('./routes/route'); // calling route.js

app.use(express.static(__dirname + "/")); // to set folder to read by browser

app.set('view engine','ejs');

app.get('/',routes.home);
app.get('/:city',routes.city);


var port = process.env.PORT || 3333;
app.listen(port, function(){ //To run local server and show command line message
	console.log('HTTP server is listening on port: ' + port);
}); 