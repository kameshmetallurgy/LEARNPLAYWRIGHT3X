const price = [1000000,20000000,-1, 50000000];
let budget = 80000000;
for ( let p of price){
if ( p == -1) continue;
if ( p > budget ) break;
console.log (`Within budge ${p}`);
}