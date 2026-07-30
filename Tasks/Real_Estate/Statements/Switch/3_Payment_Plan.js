let payment_plan = {
    1: "Full Payment",
    2: "Installment",
    3: "Down Payment"
};

switch (payment_plan[2]) {
    case "Full Payment":
        console.log("You have selected Full Payment.");
        break;
    case "Installment":
        console.log("You have selected Installment payment.");
        break;
    case "Down Payment":
        console.log("You have selected Down Payment.");
        break;
    default:
        console.log("Invalid payment plan.");
}
