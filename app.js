var express = require("express");
var app = express();
var port = 3000;

app.listen(port, function(err, res) {   //callback function
	if (err) {
		console.log("Server error!");
	} else {
		console.log("Server has started on port " + port);
	}
});
