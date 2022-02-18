
let arr = ["oranges", "apples", "bananas","mango","oranges"];
console.log('        arr :- ', arr,'=>',arr.length);


let set = new Set(arr);

console.log('new Set(arr); :- ', set,'=>',set.size); // set keeps only unique values


console.log('\n--------------------Iteration over Set----------------------');

console.log("for..of :-");
for (let value of set) console.log(value);

console.log("\nforEach :-");
set.forEach((value, valueAgain, set) =>  console.log(value) );