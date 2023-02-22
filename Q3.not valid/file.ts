/* store a person name in a veriable, and print that person name in lower case, upper case and titleCase */
let personName= "FaRooQ AhMaD SiDdiQuI";
console.log(`Name : ${personName}`);
//console.log(`Name in Lower case : ${personName.toLowerCase()}`);
//console.log(`Name in Upper case : ${personName.toUpperCase()}`);
let titlecaseName=personName.split(' ');
for(let i = 0; i < titlecaseName.length; i++)
{
    titlecaseName[i] = titlecaseName[i].charAt(0).toUpperCase() + titlecaseName[i].slice[1].toLowerCase();
}
console.log(titlecaseName.toString().replace(/,/g, ' ')); 
export{}
