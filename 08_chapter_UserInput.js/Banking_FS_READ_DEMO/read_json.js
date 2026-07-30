const fs = require('fs');
fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }
    const users = JSON.parse(data);
    users.forEach(u => console.log(`User ID: ${u.id} - Name: ${u.name}, Age: ${u.age}`));
});

// Banking Use Case is being used here



// cd C:\LEARNPLAYWRIGHT3X\08_chapter_UserInput.js\Banking_FS_READ_DEMO

// node read_json.js
