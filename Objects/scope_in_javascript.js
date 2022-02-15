// 1. Global Scope---------------------------------------------------------------------
let name = "Akshay";

//2. Function scope------------------------------------------------------------
function show() {

    var message = 'Hello !';
    console.log('Function scope :- ', message);
}

show();
//console.log(message);  // throws ReferenceError can't access message is function/local level scope
console.log('Global Scope :- ', name);    // Akshay Global Scope can be access all over the code.


//3.Block Scope----------------------------------------
{
    let fname = 'Abhay';
    const lname = 'Roy';
    var age = 25;

}

//console.log(fname); //ReferenceError: fname is not defined
//console.log(lname); //ReferenceError: fname is not defined

console.log('var in the block :- ', age);  //25 var is not block scoped


//4. Lexical scope----------------------------------------------------
console.log('--------------------------------Lexical scope------------------------------------------');

function outerFunc() {
    // the outer scope
    let outerVar = 'Outer function variable';

    // console.log(innerVar); //ReferenceError: innerVar is not defined

    function innerFunc() {
        // the inner scope
        let innerVar = 'Inner function variable!';
        console.log('Inner Function :- ', outerVar); // 'I am from outside!'
    }

    innerFunc();
}

outerFunc();



console.log('\n-------------------------Shadowing----------------------');

let a = 10;
const b = 20;
var c = 30;
console.log('--------Before block Values :-');
console.log('   let a :-', a);
console.log('   const b :-', b);
console.log('   var c :-', c);

{
    let a = 1000;     // Legal Shadowing
    const b = 2000;   // Legal Shadowing
    var c = 3000;     // Can't Shadowing

    /*// Illegal Shadowing
    var a=555;   //SyntaxError: Identifier 'a' has already been declared
    var b=555;  */

    console.log('--------Inside block Values :-');
    console.log('   let a :-', a);
    console.log('   const b :-', b);
    console.log('   var c :-', c);
}

console.log('----------After block Values:-');
console.log('   let a :-', a);
console.log('   const b :-', b);
console.log('   var c :-', c);

