

//Creating object
let obje = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax


user = {
    name: "Akshay",
    age: 30,
    "school name": "Seconday School"  // multiword property name must be quoted      
};

console.log("user :", user)
console.log("user.name :", user.name)
console.log("user.age  :", user.age)
console.log("user['school name']  :", user['school name'])


delete user.age;
console.log("\ndelete user.age; :", user)

let key = "age";
user[key] = 25;
console.log("\nlet key = 'age'; ")
console.log("user[key]=25; user =", user)


//function for creating object
function makeUser(name, age) {
    return {
        name, // same as name: name
        age   // same as age: age
    };
}

let user1 = makeUser("Akshay", 26);
console.log("\nmakeUser(\"Akshay\", 26); user1:-", user1);




// for an object property, there’s not any restriction: these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3
  };
  console.log("\nnot any restriction: obj=",obj)




  let obj1 = {
    0: "test" // same as "0": "test"
  };
  
  console.log("obj1 =", obj1 );
  // both alerts access the same property (the number 0 is converted to string "0")
  console.log("obj1['0'] :", obj1["0"] ); // test
  console.log("obj1[0]   :", obj1[0] ); // test (same property)


//There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:
let obj2 = {};
obj2.__proto__ = 5; // assign a number
console.log("\nobj2:",obj2);
console.log("obj2.__proto__ :",obj2.__proto__); // [object Object] - the value is an object, didn't work as intended

console.log( ' \n user :-',user ); 
console.log( '"age" in user   :-',"age" in user ); // true, user.age exists
console.log('"blabla" in user :-', "blabla" in user ); // false, user.blabla doesn't exist



let countryCodes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1": "USA"
  };

  
console.log( ' \n countryCodes:-',countryCodes ); 