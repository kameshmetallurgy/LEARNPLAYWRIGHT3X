let wafer_size = {
    1: "4 inch",
    2: "6 inch",
    3: "12 inch"
};

switch (wafer_size[2]) {
    case "4 inch":
        console.log("You have selected a 4-inch wafer.");
        break;
    case "6 inch":
        console.log("You have selected a 6-inch wafer.");
        break;
    case "12 inch":
        console.log("You have selected a 12-inch wafer.");
        break;
    default:
        console.log("Invalid wafer size.");
}