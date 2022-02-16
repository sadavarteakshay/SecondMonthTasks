
//Declaration of Array
let cars = new Array();
let countries = [];

//Array Initialization
cars = new Array("Saab", "Volvo", "BMW");
countries = ["Afghanistan", "Dubai", "India", "China", "USA", "Iran", "Bangladesh", "Australia"];

console.log("cars      :- ", cars);
console.log("countries :- ", countries);

//Accessing Array Elements
console.log("\nAccessing Array Elements :- ");
console.log("cars[2]      :- ", cars[2]);
console.log("countries[5] :- ", countries[5]);

console.log("\nReplace an element: :- ");
cars[2] = 'Mercedes-Benz';
console.log("cars[2] = 'Mercedes-Benz' :- cars = ", cars);

console.log("\nAdding new element: :- ");
cars[3] = 'Toyota';
console.log("cars[3] = 'Toyota'; :- cars = ", cars);


console.log("\ncountries.length :- ", countries.length);

//An array can store elements of any type.
let arr = ['Akshay',
    024,
    9.99,
    true,
    { name: 'Abhay' },
    null,
    function () { console.log('hello'); }
];

console.log("\nAn array can store elements of any type :- arr = ", arr);
console.log("\narr[4].name :- ", arr[4].name);
console.log("\narr[6] :- ", arr[6]);


console.log("\n---------------------------------Methods pop/push, shift/unshift--------------------------------- ");

console.log("\ncars :- ", cars);
//cars :-  [ 'Saab', 'Volvo', 'Mercedes-Benz', 'Toyota' ]

//push() :- adds an element to the end.
cars.push("Mahindra-Thar");
console.log("\ncars.push(\"Mahindra-Thar\") => cars = ", cars);

//pop() :- takes an element from the end.
cars.pop();
console.log("\ncars.pop() => cars =", cars);


//unshift() :- Add the element to the beginning of the array:
cars.unshift("Tesla");
console.log("\ncars.unshift(\"Tesla\") => cars =", cars);

//shift() :- Extracts the first element of the array and returns it
console.log("\ncars.shift() =>", cars.shift(), " , cars =", cars);



console.log("\n---------------------------------Internal working of Array--------------------------------- ");

let fruits = []; // make an array
fruits[1] = 5;
fruits[99999] = 5; // assign a property with the index far greater than its length

fruits.age = 25; // create a property with an arbitrary name
console.log(fruits);


console.log("\n---------------------------------Loops--------------------------------- ");

console.log("\nfor Loop  :- ");
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}

console.log("\nfor .. of  Loop :- ");
for (let country of countries) {
    console.log(country);
}


console.log("\nfor .. in  Loop :- ");
for (let key in countries) {
    console.log(countries[key]); // Apple, Orange, Pear
}


console.log("\n---------------------------------The length property--------------------------------- ");

let arr1 = [];
arr1[145] = "Akshay";

console.log( "arr1.length  :- ",arr1.length ); 

// the length property is that it’s writable.

arr1 = [1, 2, 3, 4, 5];
console.log("\narr1        :- ",arr1);
console.log("arr1.length :- ",arr1.length);

arr1.length = 2;  // truncate to 2 elements
console.log("arr1.length = 2; :- ",arr1);


arr1.length = 5; // return length back
console.log("arr1.length = 5; :- ",arr1);
console.log("arr1[3] :- ", arr1[3] ); // undefined: the values do not return

//So, the simplest way to clear the array is: 
arr1.length = 0;
console.log("arr1.length = 0; :- ",arr1);


/* If new Array is called with a single argument which is a number, 
then it creates an array without items, but with the given length. */
 
let arr2 = new Array(2); // will it create an array of length 2
console.log( "\narr2 = new Array(2) :-",arr2);
console.log( arr2[0] ); // undefined! no elements.
console.log("arr2.length :- ", arr2.length ); // length 2


console.log("\n---------------------------------Multidimensional arrays--------------------------------- ");

let salary = [
    ["Akshay", 24, 18000],
    ["Ram", 30, 30000],
    ["Ajay", 28, 41000],
    ["Ajit", 31, 28000],
 ];
 
 // This loop is for outer array
for (let i = 0; i < salary.length;    i++) {

    // This loop is for inner-arrays
    for (let j = 0; j < salary[i].length; j++) {

        // Accessing each elements of inner-array
        console.log( 'salary[',i,'][',j,'] :-',salary[i][j]); 
    }
    console.log(); 
}



console.log("\n---------------------------------toString()--------------------------------- ");


let arr3 = [1, 2, 3];
console.log( "arr3 :- ",arr3);
console.log( "arr3.toString() :- ",arr3.toString());

