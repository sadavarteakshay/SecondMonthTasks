var arr = new Array(1000000).fill(Math.random());
 
 
//for
console.time("for ")
for (let i = 0; i <arr.length; i++) {}
console.timeEnd("for ");


console.log("\n------------------------------");
//for...in
console.time("for...in ")
for (let ele in arr){ arr }
console.timeEnd("for...in ");


console.log("\n------------------------------");
//for...of
console.time("for...of ")
for (let ele of arr){}
console.timeEnd("for...of ");


console.log("\n------------------------------");
//for...each
console.time("for...each ")
arr.forEach((item)=> item)
console.timeEnd("for...each ");



console.log("\n------------------------------");
//while
console.time("while ")
let i = 0;
while (i < arr.length) {
    arr[i];
  i++;
}
console.timeEnd("while ");



console.log("\n------------------------------");
//do...while
console.time("do...while ")
let ie = 0;
do {
    arr[i];
    ie++;
}
while (ie < arr.length);
console.timeEnd("do...while ");
