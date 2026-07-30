const Medicine = {

   name : "Aspirin",
    manufacturer : "Bayer",
    price : 10.99,
    strength : "500mg",
    form : "Tablet",
}

for (let key in Medicine) {
    console.log(`${key}: ${Medicine[key]}`);
}