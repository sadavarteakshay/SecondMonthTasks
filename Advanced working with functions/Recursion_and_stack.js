
function factorial(num) {

    if (num == 1) return num;

    else return num * factorial(num - 1);
}


console.log("factorial(10) :-", factorial(10));


console.log("\n-------------------------Recursion with Nestest :-");


let company = {

    sales: [{ name: 'Akshay', salary: 1000 }, { name: 'Jay', salary: 1600 }],

    development: {
        sites: [{ name: 'Nitin', salary: 2000 }, { name: 'Sai', salary: 1800 }],
        internals: [{ name: 'Jay', salary: 1300 }]
    }
};

console.log("company :-\n", company);

function sumSalaries(company) {

    if (Array.isArray(company)) {
        return company.reduce((prev, current) => prev + current.salary, 0); // sum the array
    }

    else {
        let sum = 0;

        for (let subdep of Object.values(company)) {
            sum += sumSalaries(subdep); // recursively call for subcompanys, sum the results
        }

        return sum;
    }
}


console.log("\nsumSalaries(company) :-", sumSalaries(company));




console.log("\n-------------------------Call Stack-----------------------------");


function a() {
    b();
    console.log("I am function a()");
}

function b() {
    c();
    console.log("I am function b()");
}


function c() {
    console.log("I am function c()");
}

//Calling function a();
console.log("Calling function a(); :---");
a();

console.log("\nCall Stack Max Limit :---");
let count = 0;

function limit(){ 
  console.log("limit :-",count++);
    limit();  
}

limit();


