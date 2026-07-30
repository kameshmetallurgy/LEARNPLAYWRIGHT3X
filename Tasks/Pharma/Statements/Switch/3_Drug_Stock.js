let drug_Stock = {
    1: "Available",
    2: "Out of Stock",
    3: "Low Stock"
};

switch (drug_Stock[3]) {
    case "Available":
        console.log("The drug is available.");
        break;
    case "Out of Stock":
        console.log("The drug is out of stock.");
        break;
    case "Low Stock":
        console.log("The drug is low on stock.");
        break;
    default:
        console.log("Invalid drug stock status.");
}
