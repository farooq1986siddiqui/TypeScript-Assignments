/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/
let personName = '\t Farooq Ahmad\n';    // "\t is used for tab opreation in string "
console.log(personName);                 // "\n is used to take next line in string"
console.log(personName.trim());          // trim() is used to emit white spaces in strings