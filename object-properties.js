/*
var leptop = {
               name: 'Hp Eletbook g3',
               color: 'silver',
               Storage: '156 gb',
               proccesor: 'core i5',
               ram: 8
};
// console.log(leptop);
console.log(leptop.ram);

*/

// recap 
var computer = {
               Name: 'Hp Elitebook',
               Ram: 8,
               rom: '126 gb',
               price: 32000,
               color: 'silver',
               display: 15,
}
var pcStorage = computer.rom;
console.log(pcStorage);


var pcPrice = computer.price;
console.log(pcPrice);

// set a property value
computer.price = 25000;
console.log(computer);

// different ways to set a value an object property\
var priceProperty = 'price';

computer.price = 22000;
computer['price'] = 20000;
computer[priceProperty] = 18000;
console.log(computer);


// computer.pcPrice(20000);
// console.log(pcPrice);