const transcation = [300, -500, 800, -200, 1500];
for ( let amount of transcation) {
    if (amount < 0){
    console.log('Skipped the debit transcation: '+ amount);
    continue; //Skip debit transactions
    } 
    if (amount > 1000){
        console.log('Amount exceeds 1000: '+ amount);
        break; // Stop processing if amount exceeds 1000
    }
    console.log(`Credit: $${amount}`);
}

// Learning from this Loop_Break_Continue_Process_Transcation are
// 1. There should never be space while naming of the file
// Example: For_Loop_Break_Continue_Process_Transcation ( Correct Naming Convention)
// Example: For_Loop_Break and Continue_Process_Transcation ( Incorrect Naming Convention)

