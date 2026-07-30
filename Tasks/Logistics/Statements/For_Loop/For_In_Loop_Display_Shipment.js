const shipment = {
    id : "SHIP101",
    Origin: "Hyderabad",
    destination: "Chennai",
    Status: "Transit"
};

for ( let key in shipment){
    console.log(`${key}: ${shipment[key]}`);
}
