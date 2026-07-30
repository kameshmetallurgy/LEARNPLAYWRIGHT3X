let current_stocke = 500; 
for ( let month = 1; month <= 12; month++) {
    current_stocke -= 20; // Decrease stock by 20 units each month

    console.log(`Month ${month}: Current Stock = ${current_stocke}`);
    
}