"use strict";
exports.__esModule = true;
/* store a person name in a veriable, and print that person name in lower case, upper case and titleCase */
var personName = "FaRooQ AhMaD SiDdiQuI";
console.log("Name : ".concat(personName));
//console.log(`Name in Lower case : ${personName.toLowerCase()}`);
//console.log(`Name in Upper case : ${personName.toUpperCase()}`);
var titlecaseName = personName.split(' ');
for (var i = 0; i < titlecaseName.length; i++) {
    titlecaseName[i] = titlecaseName[i].charAt(0).toUpperCase() + titlecaseName[i].slice[1].toLowerCase();
}
console.log(titlecaseName.toString().replace(/,/g, ' '));
