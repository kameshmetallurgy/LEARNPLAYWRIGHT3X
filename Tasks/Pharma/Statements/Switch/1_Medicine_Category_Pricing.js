let category = {
    1: "Antibiotic",
    2: "Vaccine",
    3: "Painkiller"
};

switch (category[1]) {
    case "Antibiotic":
        console.log("You have selected Antibiotic. Price: $20 per pack.");
        break;
    case "Vaccine":
        console.log("You have selected Vaccine. Price: $50 per dose.");
        break;
    case "Painkiller":
        console.log("You have selected Painkiller. Price: $10 per tablet.");
        break;
    default:
        console.log("Invalid medicine category.");
}