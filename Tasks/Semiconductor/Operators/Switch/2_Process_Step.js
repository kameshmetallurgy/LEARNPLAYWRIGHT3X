let process_step = {
    1: "Lithography",
    2: "Etching",
    3: "Deposition"
};

switch (process_step[2]) {
    case "Lithography":
        console.log("You have selected Lithography.");
        break;
    case "Etching":
        console.log("You have selected Etching.");
        break;
    case "Deposition":
        console.log("You have selected Deposition.");
        break;
    default:
        console.log("Invalid process step.");
}
