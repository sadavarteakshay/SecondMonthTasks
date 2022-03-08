//Boolean Conversion
console.log("-------------------Boolean Conversion-------------------")

console.log('Boolean(1)        :-',Boolean(1) ); // true
console.log('Boolean(0)        :-',Boolean(0) ); // false
console.log('Boolean("hello")  :-',Boolean("hello")); // true
console.log('Boolean("")       :-',Boolean("") ); // false
console.log('Boolean(" ")      :-',Boolean(" ") ); // true
console.log('Boolean("0")      :-',Boolean("0") ); // true
console.log('Boolean(null)     :-',Boolean(null) ); // false
console.log('Boolean(undefined):-',Boolean(undefined)); // false



//Numeric Conversion
console.log("\n-------------------Numeric Conversion-------------------")

console.log(' "6" / "2" :- ', "6" / "2" ); // 3, strings are converted to numbers

let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123

console.log(typeof num); // number

let age = Number("an arbitrary string instead of a number");

console.log(age); // NaN, conversion failed

console.log('Number("   123   ") :-',Number("   123   ")); // 123
console.log('Number("123z")      :-',Number("123z"));      // NaN (error reading a number at "z")
console.log('Number("")          :-',Number(""));          // 0 (empty string )
console.log('Number(" ")         :-',Number(" "));          // 0 (whitespace string )
console.log('Number(true)        :-',Number(true));         // 1
console.log('Number(false)       :-',Number(false));       // 0
console.log('Number(null)        :-',Number(null));       // 0
console.log('Number(undefined)   :-',Number(undefined)); //NaN

// No effect on numbers
let x = 1;
console.log( +x ); // 1

let y = -2;
console.log( +y ); // -2

// Converts non-numbers
console.log(' +true :-',+true ); // 1
console.log(' +""   :-', +"" );   // 0

let apples = "2";
let oranges = "3";
console.log('let apples = "2";\nlet oranges = "3";' );
console.log(' apples + oranges  :-',apples + oranges ); // "23", the binary plus concatenates strings
console.log('+apples + +oranges :-',+apples + +oranges ); // 5



//String Conversion
console.log("\m-------------------String Conversion-------------------")

console.log('String(1)        :-',String(1) ); // "1"
console.log('String(0)        :-',String(0) ); // "0"
console.log('String(true)     :-',String(true) ); // "true"
console.log('String(false)    :-',String(false) ); // "false"
console.log('String(null)     :-',String(null) ); // "null"
console.log('String(undefined):-',String(undefined)); // "undefined"

console.log(" '1' + 2     :-",'1' + 2 );    // "12"
console.log("  2 + '1'    :-", 2 + '1');    // "21"
console.log("2 + 2 + '1'  :-",2 + 2 + '1'); // "41"
console.log("'1' + 2 + 2  :-",'1' + 2 + 2); // "122" and not "14"
