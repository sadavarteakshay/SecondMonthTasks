


let user = {
    name: "Akshay",
    age: 26
};



console.log("             user:-", user)

console.log("Object.keys(user) :-", Object.keys(user)) //returns an array of keys.
console.log("Object.values(user) :-", Object.values(user)) //returns an array of values.
console.log("Object.entries(user) :-", Object.entries(user)) //returns an array of [key, value] pairs.


console.log("\nIterating over object-------");
for (let value of Object.values(user)) {
    console.log(value);
}




let prices = {
    banana: 1,
    orange: 2,
    apple: 4,
  };
  
  console.log("\n    prices   :-",prices); 

  let doublePrices = Object.fromEntries(
    
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
  );
  
  console.log("doublePrices :-",doublePrices );