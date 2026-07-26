let defect_code = {
    1: "D 101",
    2: "D 202",
    3: "D 303"
};

switch (defect_code[3]) {
    case "D 101":
        console.log("Defect code D 101: Minor surface defect.");
        break;
    case "D 202":
        console.log("Defect code D 202: Major surface defect.");
        break;
    case "D 303":
        console.log("Defect code D 303: Electrical defect.");
        break;
    default:
        console.log("Invalid defect code.");
}