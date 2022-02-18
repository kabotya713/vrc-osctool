var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log(req.query.select);
  var json = "";
  if( !req.query.select ) {
    json = require("../public/json/sample.json");
  }
  else {
    json = require("../public/json/" + req.query.select);
  }

  res.render('index', 
    {
      title: 'OSC Tool for VRChat',
      json_data: json
    });
});


module.exports = router;

