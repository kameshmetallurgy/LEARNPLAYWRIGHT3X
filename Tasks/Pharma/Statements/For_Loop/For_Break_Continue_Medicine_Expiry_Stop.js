const stock = [120,80,-10,60,5,200];
for (let qty of stock){

    if( qty < 0 ) continue; // expired, critical threshold
    if ( qty < 50 ) break; // critical threshold
    console.log(`Usable Stock: ${qty}`);
}