let property_type = {
    1: "Residential",
    2: "Commercial",
    3: "Industrial"
};

switch (property_type[2]) {
    case "Residential":
        console.log("You have selected Residential property.");
        break;
    case "Commercial":
        console.log("You have selected Commercial property.");
        break;
    case "Industrial":
        console.log("You have selected Industrial property.");
        break;
    default:
        console.log("Invalid property type.");
}