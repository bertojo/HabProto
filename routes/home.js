var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
	console.log("User requested home page.");
	res.write("Home Page!");
	res.end();
});

module.exports = router;