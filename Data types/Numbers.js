
//More ways to write a number

let billion = 1000000000;
console.log('billion :- ', billion);

let billionWith_ = 1_000_000_000;
console.log('billion with underscore 1_000_000_000 :- ', billion);


//In JavaScript, we can shorten a number by appending the letter "e" to it and specifying the zeroes count:

let billionWithe = 1e9; // 1 billion, literally: 1 and 9 zeroes
console.log('billion 1e9 :- ', billionWithe); //1e9 means 1 * 1000000000

let mcs = 1e-6; // six zeroes to the left from 1
console.log('1e-6  :- ', mcs);

//Hex, binary and octal numbers
console.log('\nHex, binary and octal numbers  :- ');

// shorter way to write Hex: 0x and then the number.
let hex1 = 0xff ; // 255
let hex2 = 0xFF; // 255 (the same, case doesn't matter)
console.log('Hex 0xff  :- ', hex1);
console.log('Hex 0xFF  :- ', hex2);

//Also Binary and octal numeral using the 0b and 0o prefixes:
let binaryNo = 0b11111111; // binary form of 255
let octalNo = 0o377; // octal form of 255
console.log('Binary 0b11111111  :- ', binaryNo);
console.log('Octal 0o377  :- ', octalNo);


console.log('\ntoString(base)  :- ');
let num = 255;
console.log( 'num :- ',num );
console.log( 'num.toString(16) :- ',num.toString(16) );  // ff
console.log( 'num.toString(2) :- ',num.toString(2) );   // 11111111
console.log( 'num.toString(36) :- ',num.toString(36) );  
console.log( '598764..toString(36) :- ',598764..toString(36) );  //If we want to call a method directly on a number, then we need to place two dots .. after it. or (1235).toString(36)


console.log('\n-----------------Rounding ----------------- ');
let num1 = 3.1;
let num2 = 3.6;
let num3 = -1.1;
let num4 = -1.6;
console.log( '\nNumbers    :- ',num1,' ',num2,' ',num3,' ',num4,' ');
console.log( 'Math.floor :-  ',Math.floor(num1),'   ',Math.floor(num2),'   ',Math.floor(num3),'   ',Math.floor(num4) );
console.log( 'Math.ceil  :-  ',Math.ceil(num1),'   ',Math.ceil(num2),'   ',Math.ceil(num3),'   ',Math.ceil(num4) );
console.log( 'Math.round :-  ',Math.round(num1),'   ',Math.round(num2),'   ',Math.round(num3),'   ',Math.round(num4) );
console.log( 'Math.trunc :-  ',Math.trunc(num1),'   ',Math.trunc(num2),'   ',Math.trunc(num3),'   ',Math.trunc(num4) );

let num5 = 12.34;
let num6 = 12.36;
console.log( '\nNumbers      :-    ',num5,'  ',num6);
console.log( 'num.toFixed(1) :-  ',num5.toFixed(1),'   ',num6.toFixed(1));

let sum = 0.1 + 0.2;
console.log( '\n0.1 + 0.2 == 0.3    :-    ',sum==0.3);
+sum.toFixed(1);
console.log( 'After +sum.toFixed(1)===0.3 :- ',+sum.toFixed(1)===0.3); // + Because toFixed() return string.

// Hello! I'm a self-increasing number!
console.log( '9999999999999999 :- ',9999999999999999 );


console.log('\n-----------------Tests: isFinite and isNaN ----------------- ');

//isNaN(value) converts its argument to a number and then tests it for being NaN:

console.log( 'isNaN(2)        :- ',isNaN(2) ); // false
console.log( 'isNaN("Akshay") :- ',isNaN("Akshay") ); // true

/* But do we need this function? Can’t we just use the comparison === NaN? Sorry, but the answer is no. 
The value NaN is unique in that it does not equal anything, including itself: */
console.log('NaN === "Akshay":- ', NaN === "Akshay" ); // false

//// will be true unless you enter Infinity, -Infinity or not a number
console.log('\nisFinite("15")  :- ',isFinite("15") ); // true
console.log( 'isFinite("str") :- ',isFinite("str") ); // false, because a special value: NaN
console.log( 'isFinite(Infinity):- ',isFinite(Infinity) ); // false, because a special value: Infinity

//Please note that an empty or a space-only string is treated as 0 in all numeric functions including isFinite.
console.log('isFinite("")  :- ',isFinite("") );




console.log('\n-----------------Compare with Object.is----------------- ');
/* There is a special built-in method Object.is that compares values like ===, but
 is more reliable for two edge cases: */
 console.log('NaN === NaN:- ', NaN === NaN ); // false
 console.log('Object.is(NaN, NaN) === true :-  ',Object.is(NaN, NaN) === true ); // false



 console.log('\n----------------- parseInt and parseFloat----------------- ');

 console.log( ' +"100px" :- ',+"100px" ); // NaN
 console.log( 'parseInt("100px")     :- ',parseInt("100px"));
 console.log( 'parseFloat("10.50px") :- ',parseFloat("10.50px"));
 
 //There are situations when parseInt/parseFloat will return NaN. It happens when no digits could be read:
 console.log( 'parseInt("a123")      :- ',parseInt("a123"));
 console.log( 'parseInt("0xff", 16)  :- ',parseInt("0xff", 16) ); // 16 base return hex value


 console.log('\n----------------- Other math functions ----------------- ');
 console.log( '\nMath.random()    :- ',Math.random()*100); //Returns a random number from 0 to 1 (not including 1).
 console.log( 'Math.max(13, 55, -10, 110, 1)    :- ',Math.max(13, 55, -10, 110, 1));
 console.log( 'Math.min(13, 55, -10, 110, 1)    :- ',Math.min(13, 55, -10, 110, 1));
 console.log( 'Math.pow(2, 3)    :- ',Math.pow(2, 3));





