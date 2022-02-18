
//creates the map.
let map = new Map();

//stores the value by the key.
map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

console.log("          map  :- ", map);
// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log("map.get(1)    :- ", map.get(1));
console.log("map.get('1')  :- ", map.get('1'));
console.log("map.get(true) :- ", map.get(true));

map[1] = 4; //this is treating map as a plain JavaScript object
console.log("map[1] = 4    :- ", map);

console.log("map.size      :- ", map.size);

console.log("map.has(1)    :- ", map.has(1));
console.log("map.has(111)  :- ", map.has(1111));

console.log("map.delete(1) :- ", map.delete(1));
console.log("map.delete('1') :- ", map.delete("1"));
console.log("          map :- ", map);

console.log("map.clear()   :- ", map.clear());
console.log("          map :- ", map);


console.log("\n-------------------objects as keys.---------------------------- ");

let user = { name: "Akshay" };

let visitsCountMap = new Map();

visitsCountMap.set(user, 22);

console.log(visitsCountMap);


console.log("\n-------------------Chaining.---------------------------- ");

let mp = new Map();

console.log("mp :-", mp);

//Every map.set call returns the map itself, so we can “chain” the calls:
mp.set('1', 'str1')
    .set(1, 'num1')
    .set(true, 'bool1');

console.log("mp :-", mp);



console.log("\n-------------------Iteration over Map.---------------------------- ");

let employees = new Map()

employees.set(1, "Akshay");
employees.set(2, "Jay");
employees.set(21, "Vijay");
employees.set(111, "Ram");

// iterate over keys (employees ids)
console.log('\niterate over keys :---');
for (let employee of employees.keys()) {
    console.log(employee);
}

// iterate over values (names)
console.log('\niterate over values :---');
for (let amount of employees.values()) {
    console.log(amount);
}

// iterate over [key, value] entries
console.log('\niterate over [key, value] :---');
for (let entry of employees) { // the same as of employees.entries()
    console.log(entry);
}

// runs the function for each (key, value) pair
console.log('\nforEach :---');
employees.forEach((value, key, map) => {
    console.log(`${key} : ${value}`);
});


// we can create a map from an object like this:
console.log('\ncreating a map from an object:---');
let obj = {
    name: "Akshay",
    age: 25
};
console.log('obj :- ', obj);

/* Here, Object.entries returns the array of key/value pairs:
 [ ["name","Akshay"], ["age", 25] ]. That’s what Map needs. */
let map1 = new Map(Object.entries(obj));

console.log('new Map(Object.entries(obj)); :-', map1);



/* There’s Object.fromEntries method that does the reverse:
 given an array of [key, value] pairs, it creates an object from them: */
console.log('\nObject.fromEntries :---');
console.log('creating an object from a map :---');

let fruits = new Map();
fruits.set('banana', 12);
fruits.set('orange', 22);
fruits.set('Apple', 42);
console.log('fruits   :-', fruits);
let objFruit = Object.fromEntries(fruits.entries()); // make a plain object (*) or let obj = Object.fromEntries(map); // omit .entries()
console.log('objFruit :-', objFruit);
