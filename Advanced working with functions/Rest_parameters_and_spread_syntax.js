

console.log("---------------------Rest parameters ... -----------------------");

function sumAll(...args) { // args is the name for the array
    let sum = 0;

    for (let arg of args) sum += arg;

    return sum;
}

console.log("sumAll(1)   :-", sumAll(1));
console.log("sumAll(1,2) :-", sumAll(1, 2));
console.log("sumAll(1, 2, 3) :-", sumAll(1, 2, 3));





console.log('\n--------The “arguments” variable--------');
//In old times, rest parameters did not exist in the language, and using arguments

function showName() {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

showName("Akshay", "Sadavarte", "Rajendra", "Abhay")


console.log("\n\n---------------------Spread syntax-----------------------");


let arr = [2, 44, 13, 65, 11, 3];

console.log("          arr    :-", arr);

console.log("Math.max(arr)    :-", Math.max(arr)); // NaN

console.log("Math.max(...arr) :-", Math.max(...arr));

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log("\n          arr1    :-", arr1);
console.log("          arr2    :-", arr2);
console.log("Math.max(...arr1, ...arr2) :-", Math.max(...arr1, ...arr2));

let merged = [0, ...arr1, 2, ...arr2];
console.log("let merged = [0, ...arr1, 2, ...arr2]; :-\n", merged);


let str = "Akshay";
console.log("\n   str    :-", str);
console.log(" [...str] :-", [...str]);




console.log("\n---------Copy an array/object---------");
console.log("Copy an array :-");
let arrOriginal = [1, 2, 3];

let arrCopy = [...arrOriginal];

console.log("arrOriginal :-",arrOriginal);
console.log("arrCopy     :-",arrCopy);

console.log("arrOriginal === arrCopy :-",arrOriginal === arrCopy); // false (not same reference)



console.log("\nCopy an object :-");
let obj1 = {
    fname:"Akshay",
    lname:"Akshay",
    age:25
}

let obj2 = {...obj1};

console.log("obj1 :-",obj1);
console.log("obj2 :-",obj2);

console.log("obj1 === obj2 :-",obj1 === obj2); // false (not same reference)

