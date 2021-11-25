var skyColor = 'blue';
var mobilePhone = ['walton', 'Samsung', 'Nokia', 'Sony'];
mobilePhone[2] = 'Xiaomi';
console.log(mobilePhone);


// cheak oppo not exits in an array
if (mobilePhone.indexOf('oppo') == -1 ) {
               console.log('oppo amir khan er phone nai');
}
// if Walton is available 
if (mobilePhone.indexOf('walton') != -1 ) {
               console.log('walton is avalable now');
}

// while loop
var i = 0;
while (i < 15) {
               console.log(i);
               i++;
}