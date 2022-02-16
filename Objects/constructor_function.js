


function Student(firstName, lastName) {

    let obj = {
        firstName: firstName,
        lastName: lastName,
    }
    return obj;
}

let studentF = Student("Akshay", "Sadavarte");

console.log("Object by Normal Function      :- ", studentF);


console.log("--------------------------------------------------------------------------------------------" );

function StudentC(firstName, lastName) {

    //let this {}
    this.firstName = firstName;
    this.lastName = lastName;

    // return this;
}

let studentC = new StudentC("Abhay", "Roy");

console.log("Object by Constructor Function :- ", studentC);