var express = require('express');
var bodyParser = require('body-parser');

// account modules
var account = require('./modules/account');

var app = express();

app.listen(3000, function(){
  console.log("Listening on port 3000");
});

app.get('/balance', function(req, res){
  res.send({money: account.randomMoney(), string: account.balanceString()});
})

app.use(express.static('public'));
