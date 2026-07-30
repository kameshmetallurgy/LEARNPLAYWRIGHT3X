let principal = 1000; //principal amount
let interest = 5; //interest rate in %
let time = 5; //time in years

for (let i = 1; i <= time; i++) {
    let simpleInterest = (principal * interest * i) / 100;

    console.log(`Year ${i}: Simple Interest = ${simpleInterest}`);
    principal += simpleInterest; // Update principal for the next iteration
}