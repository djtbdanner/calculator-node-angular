var express = require('express');
var app = express(); 						// create our app w/ express
var port = process.env.PORT || 3000; 				// set the port
app.use(express.static('.')); 		// set the static files location /public/img will be /img for users
app.listen(port);
console.log("App listening on port " + port);
