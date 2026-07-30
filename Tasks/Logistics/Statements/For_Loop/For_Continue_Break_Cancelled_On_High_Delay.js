const delay = [20,35,-1,60,10];
for ( let d of delay) {
    if ( d == -1) continue;
    if (d > 50) break;
    console.log(`Dealay is ${d} in mins`);
    
}