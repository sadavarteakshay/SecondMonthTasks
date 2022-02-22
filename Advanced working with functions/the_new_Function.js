

let sum = new Function('a', 'b', 'return a + b');

console.log( sum(12, 112) ); 


let sayHi = new Function('console.log("Hello")');

sayHi();  