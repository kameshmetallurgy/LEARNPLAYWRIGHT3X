

let attempts = 0;
let maxAttempts = 3;
let otp = '';

while (otp != "1234" && attempts <maxAttempts) {
    otp = prompt ("Enter otp");
    attempts++;
}

console.log(attempts);
// This code is valid inside a browser and not inside the VS Code

