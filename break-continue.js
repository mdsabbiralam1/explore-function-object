// whle loop break
/*
var i = 0;
 while (i < 15) {
               console.log(i);
               if (i == 5) {
                              break;
               }
               i++;
 }
*/
//  for loop break
/*
for (i = 1; i < 10; i++) {
               console.log(i);
               if (i == 6) {
                              break;
               }
 } */

//  array break point
/*
var examMark = [41, 85, 58, 98, 65, 99, 69, 40, 29, 65];
for (i = 0; i < examMark.length; i++) {
               var element = examMark[i];
               console.log(element);
               if(i == 2) {
                              break;
               }
}
*/
// recap array break point 

var num = [12, 43, 54, 75, 46, 77, 43, 86, 45];
for (i = 0; i < num.length; i++) {
               var numElement = num[i];
               console.log(numElement);
               if (i == 4) {
                              break;
               }
}
// var index = num.indexOf(45);
// console.log(index);