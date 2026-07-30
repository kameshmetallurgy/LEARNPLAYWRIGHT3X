const account = {
    account_Number: "123456789",
    name: "John Doe",   
    balance: 25000,
    type: "Savings",
};

for (let key in account) {
    console.log(`${key}: ${account[key]}`);
}