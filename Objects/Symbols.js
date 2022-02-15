

// id is a symbol with the description "id"
let id = Symbol("user_id");
console.log(id);
console.log('id.description :- ', id.description);

//A “symbol” represents a unique identifier.
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log('\nid1 :- ', id1);
console.log('id2 :- ', id2);
console.log('id1 == id2 :- ', id1 == id2); // false


console.log("\n-------------------Symbols in an object literal---------------")
let uid = Symbol("uid");

let user = {
    name: "Akshay",
    age: 25,
    [uid]: 123 // not "id": 123
};

user.uid = 3564;
console.log("\nuser :- ", user);
console.log("\nSymbols are skipped by for…in :- ");
for (let key in user) { console.log(key, user[key]); } //Symbolic properties do not participate in for..in loop.


//Object.keys(user) also ignores them. That’s a part of the general “hiding symbolic properties” principle.
console.log('\nObject.keys(user) :- ', Object.keys(user));


//In contrast, Object.assign copies both string and symbol properties:
let copyUser = Object.assign({}, user);
console.log('\ncopyUser :- ',copyUser)




console.log("\n-------------------Global symbols---------------");

// read from the global registry
let userid1 = Symbol.for("userid"); // if the symbol did not exist, it is created
console.log( 'userid1 = Symbol.for("userid")  :- ', userid1);

// read it again (maybe from another part of the code)
let userid2 = Symbol.for("userid");
console.log( 'userid2 = Symbol.for("userid")  :- ', userid2 );

// the same symbol
console.log( 'userid1 === userid2 :- ', userid1 === userid2 ); // true