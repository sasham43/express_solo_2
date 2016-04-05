
var rando = require('./random');
var money = require('./usd');

function randomMoney() {
  var returnRandom=rando(100, 1000000);
  return money(returnRandom);
  // console.log(returnRandom);
}
// console.log(account());
function balance(){
  return "Account balance: \n";
}
exports.randomMoney=randomMoney;
exports.balanceString=balance;
