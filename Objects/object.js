/* Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. */
user
console.log("\nCreated an empty object user.")
let user = {};
console.log(user);

console.log("\nAdded the property name with the value John and surname with the value Smith.")
user["first name"]="John";
user.surname="Smith";
console.log(user);

console.log("\nChanged the value of the name to Pete.")
user.name="Pete";
console.log(user);

console.log("\nRemoved the property name from the object.")
delete user.name;
console.log(user);


function User(name){

    this.name=name;
    this.age=30;

}

let user1 = new User("Akshay");


function user2(name){

    return {

        name:"Akshay",


        age:25
    }
}

let obj = new Object()

obj.