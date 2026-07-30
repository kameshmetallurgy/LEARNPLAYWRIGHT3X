account_Type_Benefits = {
    1: "Savings Account",
    2: "Current Account",
    3: "Fixed Deposit Account"
};

switch (account_Type_Benefits[2]) {
    case "Savings Account":
        console.log("You have selected Savings Account. Benefits include interest earnings and easy access to funds.");
        break;
    case "Current Account":
        console.log("You have selected Current Account. Benefits include unlimited transactions and overdraft facilities.");
        break;
    case "Fixed Deposit Account":
        console.log("You have selected Fixed Deposit Account. Benefits include higher interest rates and fixed tenure.");
        break;
    default:
        console.log("Invalid account type.");
}
