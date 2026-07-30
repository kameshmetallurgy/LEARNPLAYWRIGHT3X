let attempt = 0;
const max_attempt = 3;
const enter_otp = ["1234","4567", "7890"];
let otp = "";

while (otp !== "1234" && attempt <max_attempt){

    otp = enter_otp[attempt];
    console.log(`Attempt ${attempt +1}: ${otp} `);
    attempt++;
}

if (otp == "1234"){
    console.log ("OTP verified");
}else {
    console.log("Maximum attempts reached");
}
