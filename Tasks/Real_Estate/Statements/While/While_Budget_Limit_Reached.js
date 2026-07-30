let budget = 5000000
let total = 0;
let price = 1200000;

while( total + price < budget){
    total += price;
    console.log(`The total is ${total}`);
}
console.log(`The total after the completion of loop is ${total}`);
