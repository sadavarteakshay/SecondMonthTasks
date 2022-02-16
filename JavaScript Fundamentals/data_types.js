
//JavaScript, are called “dynamically typed”.
// no error We can put any type in a variable. 
 let message = "hello";
     message = 123456;


console.log("------------------------------------Number-----------------------------")
 
let n = 123;
console.log("Number (Integer) :- " , n);
n = 12.345;
console.log("Number (float)   :- " , n);


console.log("Infinity (1/0)     :- " , 1/0); // Not produce any error gives infinity.
console.log("NaN  ('number'/2)  :- " , 'not a number' / 2); // Not produce any error gives NaN (Not a Number).


/* In JavaScript, the “number” type cannot represent integer values larger
 than (2^53-1) (that’s 9007199254740991), or less than -(2^53-1) for negatives.
 BigInt type was recently added to the language to represent integers of arbitrary length. */
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log("bigInt :- " , bigInt);


console.log("\n------------------------------------String-----------------------------")


let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

console.log(`str = ${str} ,  2+8 = ${ 2+8 }`);

console.log("\n-------------------------------Boolean (logical type)-----------------------------")

let nameFieldChecked = true;  
let ageFieldChecked = false;

console.log(" 4 > 1 = ", 4 > 1 );

console.log("\n-------------------------------null and undefined -----------------------------")

//The meaning of undefined is “value is not assigned”.
let age;
console.log(" let age; :- ", age );
// it is possible to explicitly assign undefined to a variable:
age = undefined;

//It’s just a special value which represents “nothing”, “empty” or “value unknown”.
let name = null;
console.log(" let name = null; :- ", name );


console.log("\n-------------------------------The typeof operator-----------------------------")

console.log("typeof undefined   :- ", typeof undefined);
console.log("typeof 10          :- ", typeof 10);
console.log("typeof 100n        :- ", typeof 100n);
console.log("typeof true        :- ", typeof true);
console.log("typeof 'Akshay'    :- ", typeof 'Akshay');
console.log("typeof Symbol(\"id\"):- ", typeof Symbol("id") );
console.log("typeof Math        :- ", typeof Math );
console.log("typeof null        :- ", typeof null ," (null is not an object.)"); //object but null is primitive null is not an object.
 


 
 
 
  

 
 