// 1. obj?.prop – returns obj.prop if obj exists, otherwise undefined.
console.log('\n---------------Optional chaining----------------------- ')

let user = {
    id: 123,
    username: 'admin',
};

//console.log(user.profile.name); //TypeError: Cannot read properties of undefined (reading 'name')

console.log('\nObject user :- ',user)

console.log('\nuser.profile?.name :- '+user.profile?.name); //undefined


//user.profile?.name = 'Akshay'; //SyntaxError: Invalid left-hand side in assignment

user.profile = {
    name: 'Akshay',
    language: 'English'
}

console.log('\nAfter adding profile to user :- ',user)



console.log('\n-------------Short-circuiting----------------------- ')

/* Short-circuiting
As it was said before, the ?. immediately stops (“short-circuits”)
the evaluation if the left part doesn’t exist. */

let x = 0;

user.sayHello?.(x++); // no "sayHello", so the execution doesn't reach x++

console.log(x); // 0, value not incremented



user.sayHello = () => { };

user.sayHello?.(x++); //"sayHello", so the execution reach x++

console.log(x); // 1, value incremented



// 2. obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
console.log('\n-------------The ?.() syntax----------------------- ')

let userGuest = {};
let userAdmin = { admin() { console.log('I am admin'); } };

console.log('Object userAdmin :- ',userAdmin);
console.log('userAdmin.admin?.() :- ');
userAdmin.admin?.(); // I am admin

console.log('\nObject userGuest :- ',userGuest);
userGuest.admin?.(); // nothing (no such method)
console.log('userGuest.admin?.() :- ',userGuest.admin?.());




// 3. obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
console.log('\n-------------The ?.[] syntax----------------------- ')

let key = "firstName";

console.log('key :- ',key);


let user1 = {
    firstName: "John"
};
console.log('\nuser1 :- ',user1);
console.log('user1?.[key] :- ',user1?.[key]); // John

let user2 = null;
console.log('\nuser2 :- ',user2);
console.log('user2?.[key] :- ',user2?.[key]); // undefined