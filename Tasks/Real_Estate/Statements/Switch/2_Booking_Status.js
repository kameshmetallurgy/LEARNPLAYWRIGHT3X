let booking_status = {
    1: "Confirmed",
    2: "Pending",
    3: "Cancelled"
};

switch (booking_status[1]) {
    case "Confirmed":
        console.log("Your booking is confirmed.");
        break;
    case "Pending":
        console.log("Your booking is pending approval.");
        break;
    case "Cancelled":
        console.log("Your booking has been cancelled.");
        break;
    default:
        console.log("Invalid booking status.");
}