
let user={
    name:"Abhay",
    age:24
}


let language = "JavaScript";

console.log('Object user :- ',user)
 
console.log('--------------------for...of--------------------------------')
for (let x of Object.values(user)) {

    console.log(x)
}

console.log('--------------------for...in--------------------------------')
for (let x in user) {

    console.log(x)
}