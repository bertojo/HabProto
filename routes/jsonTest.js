var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
	console.log("Testing: Sending a json file.");
	res.send({
		name: "lololol",
		number: "1512412429875"
	});	
});

module.exports = router;