let shipment_status = {
    1: "In Transit",
    2: "Delivered",
    3: "Delayed"
};

switch (shipment_status[1]) {
    case "In Transit":
        console.log("Your shipment is currently in transit. It is on its way to the destination.");
        break;
    case "Delivered":
        console.log("Your shipment has been delivered.");
        break;
    case "Delayed":
        console.log("Your shipment is delayed.");
        break;
    default:
        console.log("Invalid shipment status.");
}