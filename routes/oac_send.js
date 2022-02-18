var express = require('express');
var osc = require('node-osc');
var router = express.Router();

const ip_addr = '127.0.0.1';
const osc_port = 9000;
var oscClient = new osc.Client(ip_addr, osc_port);

router.post('/', function(req, res, next) {
  console.log("send !!");
  console.log(req.body);

  var sendMsg =  new osc.Message(req.body.addr);
  sendMsg.append(req.body.input);
  oscClient.send(sendMsg);

  res.sendStatus(200);
});

module.exports = router;
