let capacity = 1000;
let loaded = 0;
let weight = 120;

while (loaded + weight < capacity ){

    loaded += weight;
    console.log(`The loaded capacity of the container is ${loaded}`);
}
console.log( loaded);