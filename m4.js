import fs from 'fs';

console.log("Start program");

fs.writeFileSync("test.txt","Hello Node js");
console.log("File created");

fs.appendFile("test.txt","\nLearning new...",(err,data) =>{
    if(err) throw err;
    else console.log(data);
})
