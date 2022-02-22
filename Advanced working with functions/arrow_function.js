
// function expression
let sum = function (x, y) {
    return x * y;
}


// using arrow functions
let sumArrow = (x, y) => x * y;


console.log(" sum(22,5)     :-", sum(22, 5));
console.log("sumArrow(22,5) :-", sumArrow(22, 5));


//If a function has only one argument, you can omit the parentheses.  
let greet = name => console.log(`\nWelcome ${name}`);
greet('Akshay');


//You can also dynamically create a function and use it as an expression. For example,

let age = 5;

let welcome = (age < 18) ?
    () => console.log('Baby') :
    () => console.log('Adult');

welcome();





console.log("\nArrow functions do not have 'this' :------------" );
let group = {
    title: "Our Group",
    students: ["Akshay", "Raj", "Manoj"],

    showList() {
        let display = function () {
            console.log("showList :-", this.title);
        }

        display();
    },


    showListArrow() {
        let displayArrow = () => console.log("showListArrow :-", this.title); // arrow functions do not have this

        displayArrow();
    }

};

group.showList();
group.showListArrow();