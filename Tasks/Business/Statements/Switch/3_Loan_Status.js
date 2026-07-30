let loan_status = {
    1: "Approved",
    2: "Pending",
    3: "Rejected"
};

switch (loan_status[1]) {
    case "Approved":
        console.log("Your loan application has been approved. Congratulations!");
        break;
    case "Pending":
        console.log("Your loan application is still pending review.");
        break;
    case "Rejected":
        console.log("Your loan application has been rejected.");
        break;
    default:
        console.log("Invalid loan status.");
}