
let single = 'Hello';
let double = " World";

let backticks = `backticks ${single} ${double}`;

console.log(backticks);

let programmingLangs = `programmingLangs :-
 * Java
 * JavaScript
 * Python
 * Go
`;
console.log(programmingLangs);

console.log('\n------------Special characters------------');

let programmingLangs2 = " By \\n programmingLangs :-\n * Java \n * JavaScript \n * Python \n * Go ";
console.log(programmingLangs2);

console.log("\\ :- \"double quote \t inside double quote\" ");

console.log("A Unicode symbol with the hex code \\u00A9 & \\u{1F60D} :-  \u00A9 \u{1F60D} ");



console.log('\n------------String length------------');

console.log('"Hi\\n".length :- ', "Hi\n".length); // 3 \n is a single “special” character, so the length is indeed 3.

let str = "Akshay";
console.log('str = ', str);
// the first character
console.log('str[0] :- ', str[0]); //[] returns undefined  
console.log('str.charAt(0) :-', str.charAt(0));  //charAt returns an empty string

// the last character
console.log("last character :- ", str[str.length - 1]);

console.log("iterate over characters using for..of :- ");
for (let char of str) {
    console.log(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}


console.log('\n------------ Strings are immutable------------');

let strm = 'Hello';
console.log('strm :- ',strm); 
strm[0] = 'h';
console.log("strm[0] = 'h' "); 
console.log('strm[0] :- ',strm[0]);  // doesn't work
console.log('strm :- ',strm); 

 
console.log('strm.toUpperCase() :- ',strm.toUpperCase()); 
console.log('strm.toLowerCase() :- ',strm.toLowerCase()); 

let strm1 = 'Widget with id id';
console.log("strm1 :-" ,strm1);
console.log("strm1.indexOf('Widget') :- ",strm1.indexOf('Widget'));
console.log("strm1.indexOf('widget') :- ",strm1.indexOf('widget'));
console.log("strm1.indexOf('id') :- ",strm1.indexOf('id'));
console.log("strm1.indexOf('id',2) :- ",strm1.indexOf('id',2));
console.log("strm1.lastIndexOf('id') :- ",strm1.lastIndexOf('id'));

console.log("strm1.includes('Hello') :- ",strm1.includes('Hello'));
console.log("strm1.startsWith('Wi') :- ",strm1.startsWith('Wi'));
console.log("strm1.endsWith('bye') :- ",strm1.endsWith('bye'));

console.log("strm1.slice(0, 5) :- ",strm1.slice(0, 5));
console.log("strm1.slice(2) :- ",strm1.slice(2));

console.log("strm1.slice(-5, -1)   :- ",strm1.slice(-5, -1));

console.log("strm1.slice(6, 3)     :- ",strm1.slice(6, 3));

console.log("strm1.substring(6, 3) :- ",strm1.substring(6, 3));
console.log("strm1.substring(3,6)  :- ",strm1.substring(3,6));

console.log("strm1.substr(3,6)     :- ",strm1.substr(3,6));


