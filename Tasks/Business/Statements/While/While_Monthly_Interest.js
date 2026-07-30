let months = 0;
let principal = 10000;

while (months<12){
    principal += (principal *0.01);
    months++;
}

console.log( principal.toFixed(2));
