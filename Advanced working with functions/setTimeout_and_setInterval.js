

function greet(fname, lname) {
    console.log(`Hello ${fname} ${lname} `);
}

//setTimeout
let timeout = setTimeout(greet, 1000, "Akshay", "Sadavarte");


//setInterval
let timeIntervalId = setInterval(greet, 2000, "Abhay", "Roy");




//let timeInterval = () => clearInterval(timeIntervalId)

setTimeout(() => clearInterval(timeIntervalId), 5000);


//Passing arrow function 
setTimeout(() => console.log('Hello'), 5000);




let timerId = setTimeout(function tick() {
    console.log('tick');
    timerId = setTimeout(tick, 2000);  
  }, 2000);


 // Zero delay setTimeout
  console.log('tick');
  setTimeout(() =>  console.log("Zero delay"));

  console.log("Hello Zero delay setTimeout");