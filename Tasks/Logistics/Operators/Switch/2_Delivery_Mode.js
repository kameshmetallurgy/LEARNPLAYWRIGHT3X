let delivery_mode = {
    1: "Standard",
    2: "Express",
    3: "Overnight"
};

switch (delivery_mode[2]) {
    case "Standard":
        console.log("You have selected Standard delivery.");
        break;
    case "Express":
        console.log("You have selected Express delivery.");
        break;
    case "Overnight":
        console.log("You have selected Overnight delivery.");
        break;
    default:
        console.log("Invalid delivery mode.");
}
