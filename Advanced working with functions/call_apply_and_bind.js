console.log("-------------------------bind()------------------------------------")
let student = {
    fname: "Akshay",
    lname: "Sadavarte",
    age: 19,
    class: "12th",

    displayDetails: function () {
console.log(`Name :-${this.fname} ${this.lname}
Age  :-${this.age}   
Class:-${this.class}   `);
    }
}

student.displayDetails();

let studentInfo = student.displayDetails;
console.log('\nstudentInfo :-');
studentInfo(); ////Well, this won’t work as the “this” will be now assigned to the global context which doesn’t have neither fname nor lname to the displayDetails().

let studentInfoBind = student.displayDetails.bind(student);
console.log('\nstudentInfoBind :-');
studentInfoBind();


console.log('\n');
function greet(param){
    console.log(`${param} , ${this.fname} ${this.lname}`);
}


let user = {
    fname: "Ajay",
    lname: "Jadhav",
}

let userGreet = greet.bind(user);  
userGreet("Good Afternoon");

console.log("-------------------------call()------------------------------------")

let mobile1 = {
     contact : ["9860821802","9875462125","7558422552","8855682232"],

     sendSms : function(subject,msg){

        this.contact.forEach(element => console.log(`${element}  ${subject}  ${msg} sent.`) );
     }

}

mobile1.sendSms("Greet","good morning");


console.log("\nmobile2 By call() :-");
let mobile2 ={
    contact : ["9640421802","9445462125","9558422552","8955682232"]
}

mobile1.sendSms.call(mobile2,"Greet","good afternoon",);



console.log("\nmobile3 By apply() :-");
let mobile3 ={
    contact : ["9640421802","9445462125","9558422552","8955682232"]
}

mobile1.sendSms.apply(mobile3,["Meeting","Shall we meet"]);




console.log("\n --------------- apply() :-----------------");

let arr = [5,45,11,55,22,12,30,85,5];
console.log("arr :-",arr);

let maxNum = Math.max.apply(null,arr);
console.log("\nMath.max.apply(null,arr); ",maxNum);
