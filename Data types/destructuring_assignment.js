
console.log("---------------Array destructuring----------------");
let user = ["Akshay", "Sadavarte"];

let [firstName, lastName] = user;

console.log("firstName :-", firstName);
console.log("lastName  :-", lastName);

let [fName, lName] = "Akshay Sadavarte".split(' ');
console.log("fName :-", fName);
console.log("lName :-", lName);


let marks = [33, 55, 74, 87, 65, 21, 36, 62, 10];

console.log("\nmarks :- ", marks);
let [x, y, , z, ...restOf] = marks;  //skiping 74 by empty , and storing remaining value in restOf[] by ...
console.log("let [x, y, ,z, ...restOf] = marks;   ");
console.log("x :-", x);
console.log("y :-", y);
console.log("z :-", z);
console.log("restOf :-", restOf);


//Assign Default Values
console.log("\nAssign Default Values:- ");

let arr = [10];
// assigning default value 5 and 7
let [a = 5, b = 7] = arr;

console.log(x);
console.log(y);



//Swapping Variables
console.log("\nSwapping Variables :- ");

let x1 = 4;
let y1 = 7;
console.log(`Before swapping x1 = ${x1} , y1 = ${y1}`);
// swapping variables
[x1, y1] = [y1, x1];
console.log("[x1, y1] = [y1, x1];  ");

console.log(`After swapping x1 = ${x1} , y1 = ${y1}`);


//Skip Items
console.log("\nSkip Items :- ");

let arrValue = [1, 2, 3];
console.log("arrValue :- ", arrValue);

let [one, , three] = arrValue; //skipping 2 value by empty ,

console.log("let [one, , three] = arrValue;  ");
console.log("one   :-", one);
console.log("three :-", three);



console.log("\n\n---------------Object destructuring----------------");

let person = {
    name: 'Akshay',
    age: 25,
    gender: 'male'
}

console.log("person :-", person);

// destructuring assignment
let { name, age, gender } = person;

console.log(" let { name, age, gender } = person;  ");
console.log("name   :-", name);
console.log("age    :-", age);
console.log("gender :-", gender);

// let { age, gender, name } = person; //We can
// let {name1, age, gender} = person;  //Error variable as the corresponding object key.


//If you want to assign different variable names for the object key, you can use:
//destructuring assignment using different variable names
console.log("\nUsing different variable names :-");

let { name: name1, age: age1, gender: gender1 } = person;
console.log(" let { name: name1, age: age1, gender:gender1 } = person;");
console.log("name1   :-", name1);
console.log("age1    :-", age1);
console.log("gender1 :-", gender1);



console.log("\n--------------------------Nested Destructuring Assignment-------------------------------");

console.log("\nNested Object :- ");
let users = {
    fname: 'akshay',
    lname: 'sadavarte',

    hobbies: {
        read: true,
        playGame: true
    }
}

console.log("users :-", users);
// nested destructuring 
let { fname, hobbies: { read, playGame } } = users;

console.log("let {fname, hobbies: {read, playGame}} = users;");
console.log("fname :-", fname);
console.log("read :-", read);
console.log("playGame :-", playGame);



console.log("\nNested Array :- ");

let nestArr = [1, [2, 3]];

console.log("nestArr :- ", nestArr);

[one, [two, three]] = nestArr;

console.log("let [one, [two, three] ] = nestArr; ");
console.log("one   :-", one);
console.log("two   :-", two);
console.log("three :-", three);





console.log("\n--------------------------Smart function parameters-------------------------------");

let options = {
    fname: 'akshay',
    lname: 'sadavarte',

    hobbies: ["reading", "swimming"]
};

function welcomeUser({ fname = "Untitled", lname = "Untitled", hobbies: [h1, h2, ...h3] }) {

    console.log(`Welcome, ${fname.toUpperCase()} ${lname.toUpperCase()}. Your hobbies are ${h1}, ${h1}`);

}

welcomeUser(options);