function bringLeptop (taka) {
               console.log('leptop price:', taka);
               console.log('Hp leptop');
               var leptopPrice = 31000;
               var pcQuantity = myBudget / leptopPrice;
               return pcQuantity;
               
}

var myBudget = 60000;
var leptop = bringLeptop(myBudget);
console.log('ei nen apnar hp leptop', leptop);
 