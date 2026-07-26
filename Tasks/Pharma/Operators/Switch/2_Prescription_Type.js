let prescription_type = {
    1: "New Prescription",
    2: "Refill Prescription",
    3: "Emergency Prescription"
};

switch (prescription_type[2]) {
    case "New Prescription":
        console.log("You have selected New Prescription. Please provide the necessary details for a new prescription.");
        break;
    case "Refill Prescription":
        console.log("You have selected Refill Prescription. Please provide the necessary details for a refill prescription.");
        break;
    case "Emergency Prescription":
        console.log("You have selected Emergency Prescription. Please provide the necessary details for an emergency prescription.");
        break;
    default:
        console.log("Invalid prescription type.");
}
