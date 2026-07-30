let present_price = 500000;
let growth = 8 //percent per annum

for ( year = 1; year<=5 ; year++){
 let future_value = present_price * Math.pow(1 + growth/100, year);
 console.log(`Year ${year}: ${future_value.toFixed(0)}`); 

}

// Learning in this code is usage of Math power
// Future Value = Present Value ( 1 + r/100) ^ n
// Math power .toFixed(0)

// {future_value.toFixed(0)} = .tofixed(0), if we dont use the below decimals will be visible
// Year 1: 540000
// Year 2: 583200
//Year 3: 629856.0000000001
// Year 4: 680244.4800000001
// Year 5: 734664.0384000003
//