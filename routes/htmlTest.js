var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
	console.log("User requesting a html");
	res.send("<h1>HTML YO</h1>" +
			 "<p>this is a paragraph</p>");
});


module.exports = router;