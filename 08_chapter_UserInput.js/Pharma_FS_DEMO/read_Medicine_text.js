const fs = require('fs');
fs.readFile('Medicine.txt', 'utf8', (err, data) => {
if (err) {
    console.log("Error reading file:", err);
    return;
}
 console.log ('File content: \n');
 console.log(data);
});

//Pharmaceutical Use Case is being used here


// cd C:\LEARNPLAYWRIGHT3X\08_chapter_UserInput.js\Pharma_FS_DEMO

// node read_Medicine_text.js