
let message = 'let – is a modern variable declaration.';

var messageVar = `var – is an old-school variable declaration. Normally we don’t use it at all.`;

const MESSAGE = 'const – is like let, but the value of the variable can’t be changed.';

const myBirthday = '18.04.1982';

      myBirthday = '01.01.2001'; // error, can't reassign the constant!

      
console.log(' let   :- ', message);
console.log(' var   :- ', messageVar);
console.log(' const :- ', MESSAGE);


//We can also declare multiple variables in one line:
let user1 = 'John', age1 = 25, message1 = 'Hello';

let user2 = 'John',
  age2 = 25,
  message2 = 'Hello';


 /*  Variable naming
The name must contain only letters, digits, or the symbols $ and _.
The first character must not be a digit. */

let userName; //Valid
let $ = 1;    // Valid declared a variable with the name "$"
let _ = 2;    // Valid and now a variable with the name "_"
let test123;  //Valid

// let 123test;   //Invalid
// let user-Name; //Invalid