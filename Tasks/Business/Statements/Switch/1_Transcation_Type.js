let transcatio_type = {
    1: "Deposit",
    2: "Withdrawal",
    3: "Transfer"
};

switch (transcatio_type[1]) {
    case "Deposit":
        console.log("You have selected Deposit.");
        break;
    case "Withdrawal":
        console.log("You have selected Withdrawal.");
        break;
    case "Transfer":
        console.log("You have selected Transfer.");
        break;
    default:
        console.log("Invalid transaction type.");
}
