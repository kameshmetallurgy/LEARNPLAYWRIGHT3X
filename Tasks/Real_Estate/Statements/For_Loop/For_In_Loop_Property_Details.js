const property = {
type: "Apartment",
city: "Hyderabad",
price: 10000000,
bed: 3
};

for ( let key in property){
    console.log (`${key} - ${property[key]}`);
}