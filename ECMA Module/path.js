const path = require("path");

// const file = path.isAbsolute("D:\Node Js\ECMA Module");
// console.log(file);

// file = path.isAbsolute("D:\Node Js\ECMA Module");


//=============join method===============

// let dir = "ECMA Module";
// file = path.join('D:','Node Js', dir, 'main.mjs');

// console.log(file);

//=============parse method===============

// file = path.parse("ECMA Module/main.mjs");

// console.log(file);

//============resolve method to get absolute file=============


file = path.resolve("main.mjs");
console.log(file);