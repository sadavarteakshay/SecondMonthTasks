

let akshay = { name: "akshay" };

let map = new Map();
map.set(akshay, 1);
console.log(map);

console.log("map.get(akshay) :- ", map.get(akshay));
akshay = null; // overwrite the reference
console.log('akshay = null; ');
console.log(map);
map.forEach((item,key)=>console.log('map :-',key,' : ',item));

 
console.log('\n---------------WeakMap()---------------------- ');

// can't use a string as the key
//weakMap.set("test", "Whoops"); // Error, because "test" is not an object



let user = { name: "akshay" };
let wm = new WeakMap();
console.log('user :- ',user);
wm.set(user, "11");
console.log('wm   :- ',wm);

console.log('wm.get(user) :- ',wm.get(user));
user = null; // overwrite the reference
console.log('user = null;  ' );
console.log('wm.has(user) :- ',wm.has(user));



 