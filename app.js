var express = require("express");
var app = express();
var router = express.Router();
var port = 3000;

var home = require("./routes/home");
var about = require("./routes/about");
var jsonTest = require("./routes/jsonTest");
var htmlTest = require("./routes/htmlTest");

app.listen(port, function(err, res) {   //callback function
	if (err) {
		console.log("Server error!");
	} else {
		console.log("Server has started on port " + port);
	}
});


//server pipeline starts here
app.use("/", home);
app.use("/about", about);
app.use("/jsonTest", jsonTest);
app.use("/htmlTest", htmlTest);

//end of pipeline, means file not found  --> 404
app.use(function(req, res) {
	res.sendStatus(404);
});