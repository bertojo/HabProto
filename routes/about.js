var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
	console.log("User requested home page.");
	res.write("About Page!");
	res.end();
});

module.exports = router;