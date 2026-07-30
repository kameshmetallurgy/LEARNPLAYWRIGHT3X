let warehoue_locator = {
    1: "Warehouse A",
    2: "Warehouse B",
    3: "Warehouse C"
};

switch (warehoue_locator[3]) {
    case "Warehouse A":
        console.log("You have selected Warehouse A.");
        break;
    case "Warehouse B":
        console.log("You have selected Warehouse B.");
        break;
    case "Warehouse C":
        console.log("You have selected Warehouse C.");
        break;
    default:
        console.log("Invalid warehouse location.");
}
