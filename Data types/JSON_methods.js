
console.log("--------------------------JSON.stringify()---------------------")

let student = {
    name: 'Akshay',
    age: 25,
    isAdmin: false,
    courses: ['Java', 'JavaScript', 'Spring'],
};


let json = JSON.stringify(student);

console.log("Student Object:-", student);

console.log("\nlet json = JSON.stringify(student);");

console.log("\nStudent json:-", json);


//JSON supports following data types:

// a number in JSON is just a number
console.log("\nJSON.stringify(1) :-", JSON.stringify(1))

// a string in JSON is still a string, but double-quoted
console.log("JSON.stringify('Akshay') :-", JSON.stringify('Akshay'))

console.log("JSON.stringify(true) :-", JSON.stringify(true));

console.log("JSON.stringify([1, 2, 3]) :-", JSON.stringify([1, 2, 3]));



let user = {
        
    [Symbol("id")]: 123, // ignored
    something: undefined, // ignored

    sayHi() { // ignored
        console.log("Hello");
    }
};

console.log("\nuser :-", user)
console.log("JSON.stringify(user) :-", JSON.stringify(user)); // {} (empty object)




console.log("\nNested objects :----")

let room = {
    number: 23
};

let meetup = {
    title: "Conference",

    participants: [{ name: "Akshay" }, { name: "Jay" }],
    place: room // meetup references room
};

console.log("meetup :-", meetup)
console.log("\nJSON.stringify(meetup) :-", JSON.stringify(meetup));


room.occupiedBy = meetup; // room references meetup
//TypeError: Converting circular structure to JSON
//console.log("\nJSON.stringify(meetup) :-", JSON.stringify(meetup));


console.log("\nJSON.stringify(value, replacer, space) :-")

//an array as the replacer.
console.log("\nreplacer :-")
console.log("   JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number'])");
console.log(":- ", JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));



console.log("\nFormatting: space :-")

let user1 = {
    name: "Akshay",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
};

console.log("JSON.stringify(user1, null, 2) :-\n", JSON.stringify(user1, null, 2)); //2 spaces
console.log("\nJSON.stringify(user1, null, 4) :-\n", JSON.stringify(user1, null, 4)); //4 spaces
console.log("\nJSON.stringify(user1, null, '-') :-\n", JSON.stringify(user1, null, "-")); //"-"  





console.log("\n\n------------------------------JSON.parse()-----------------------------------")


console.log("json String :-", json)
console.log("JSON.parse(json); \nJS Object :- ", JSON.parse(json))




console.log("\nUsing reviver :-")

let meetupData = '{"title":"Conference","date":"2022-02-18T12:00:00.000Z"}';
console.log("meetupData :-",meetupData)
let meetupObj = JSON.parse(meetupData);

//console.log(meetupObj.date.getDate()); // Error! TypeError: meetupObj.date.getDate is not a function

meetupObj = JSON.parse(meetupData, function (key, value) {
     
    return key == 'date'? new Date(value):value;
});

console.log("meetupObj.date.getDate() :-",meetupObj.date.getDate());