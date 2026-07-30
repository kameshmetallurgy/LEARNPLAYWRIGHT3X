const fs = require('fs');
const data = fs.readFileSync('city.txt', 'utf8');

try{
    console.log('Cities: \n');
    console.log(data);

}
catch(err){
    console.log("Error reading file:", err);
}

// REAL ESTAT USE CASE

// cd C:\LEARNPLAYWRIGHT3X\08_chapter_UserInput.js\Real_Estate_FS_DEMO
// node read_City_txt.js