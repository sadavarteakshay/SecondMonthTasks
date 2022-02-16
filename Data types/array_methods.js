
countries = ["Afghanistan", "Dubai", "India", "China", "USA"];
console.log("             countries :- ", countries);
console.log("      countries.length :- ", countries.length);

console.log("\nslice() :---------------------------------------------------- ");
console.log("\n  countries.slice(1,4) :- ", countries.slice(1, 4));
console.log("countries.slice(-4,-1) :- ", countries.slice(-4, -1));

console.log("\nsplice() :---------------------------------------------------- ");
//Adding elements without deleting.
countries.splice(1, 0, "Iran")
console.log('\n countries.splice(1,0,"Iran") :- ');
console.log(" countries.length :- ", countries.length);
console.log(" countries :-", countries);



//Adding/replace  elements.
countries.splice(1, 2, "Bangladesh")
console.log('\n countries.splice(1,2,"Bangladesh") :- ');
console.log(" countries.length :- ", countries.length);
console.log(" countries :-", countries);

///deleting element
console.log("\n countries.splice(1,4) :- ", countries.splice(1, 4));
console.log("             countries :- ", countries);



///concatnating element/array
console.log("\nconcat() :-------------------------------------------------- ");
let newCountriesList = countries.concat(["Bangladesh", "Australia", "India", "China", "USA"]);
console.log("           countries :- ", countries);
console.log('let newCountriesList = countries.concat(["Bangladesh", "Australia"],"India", "China", "USA");');
console.log('    newCountriesList :- ', newCountriesList);


console.log("\nIterate: forEach() :-------------------------------------------------- ");

newCountriesList.forEach((item, index) => { console.log(index, item) });



console.log("\nindexOf/lastIndexOf :-------------------------------------------------- ");

let arr = [0, false, NaN, 0, null, 0];
console.log('          arr  :- ', arr)
console.log('arr.indexOf(0)     :- ', arr.indexOf(0));
console.log('arr.indexOf(0,1)   :- ', arr.indexOf(0, 1));
console.log('arr.indexOf(false) :- ', arr.indexOf(false));
console.log('arr.indexOf(null)  :- ', arr.indexOf(null));
console.log('arr.indexOf("ram") :- ', arr.indexOf("ram"));
console.log('arr.indexOf(NaN)   :- ', arr.indexOf(NaN));  //the methods use === comparison. 

console.log('arr.lastIndexOf(0) :- ', arr.lastIndexOf(0));

//If we don’t want to know the exact index, then arr.includes is preferred.
console.log('\narr.includes(0)    :- ', arr.includes(0));
console.log('arr.includes("ram"):- ', arr.includes("ram"));
console.log('arr.includes(NaN)  :- ', arr.includes(NaN));




console.log("\nfind and findIndex :-------------------------------------------------- ");
//Imagine we have an array of objects. How do we find an object with the specific condition?

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

let user = users.find(item => item.id == 1);

console.log('id =1 : ', user);

let userIndex = users.findIndex(item => item.name == "Mary");
console.log('index of "Mary" :- ', userIndex);


console.log("\nfilter() :-------------------------------------------------- ");
//The syntax is similar to find, but filter returns an array of all matching elements:

let someUsers = users.filter(item => item.id < 3);
console.log('id < 3  : ', someUsers);



console.log("\nmap() :-------------------------------------------------- ");

let mobile = ["9890989852", "9290989552", "8890989852", "7790989852"];
console.log('mobile  : ', mobile);
let modifiedMobile = mobile.map((element) => "+91-" + element);

console.log("modifiedMobile :- ", modifiedMobile);



console.log("\nsort(fn) :-------------------------------------------------- ");
let arrS = [1, 2, 15];
console.log("        arrS :- ", arrS);
arrS.sort();
console.log("arrS.sort(); :- ", arrS);  // 1, 15, 2 The items are sorted as strings by default. "2" > "15"


function customSortFun(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

arrS.sort(customSortFun);
console.log("arrS.sort(customSortFun); :-", arrS);

//Arrow functions for the best
arrS.sort( (a, b) => a - b );
console.log("arrS.sort( (a, b) => a - b ); :-", arrS);



let countries1 = ['Österreich', 'Andorra', 'Vietnam'];
console.log("\nlocaleCompare :-");
console.log( "sort(a,b) :-",countries1.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

console.log( "a.localeCompare(b) :-",countries1.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)

console.log("\nreverse ():-");
console.log("countries1 :-",countries1);
console.log("countries1.reverse() :-",countries1.reverse());


console.log("\nsplit():-");
let names = 'Akshay, Jay, Abhay, Ram, Raveer ';
console.log("names  :-",names);
let arrNames = names.split(',');
console.log("names.split(','); :-",arrNames);
let arrNames1 = names.split(', ',3); 
console.log("names.split(',' ,3); :-",arrNames1);


console.log("\njoin():-");
console.log("arrNames :-",arrNames);
let str = arrNames.join(''); // glue the array into a string using ;
console.log("arrNames :-",str);


//reduce/reduceRight
console.log("\nreduce():-");
let ar = [1, 2, 3, 4, 5];
console.log("ar :-",ar);

let result = ar.reduce((sum, current) => sum + current, 0);
console.log("ar.reduce((sum, current) => sum + current, 0); :-",result); // 15

 

console.log("\nArray.isArray():-");
console.log("Array.isArray({}) :",Array.isArray({})); // false
console.log("Array.isArray([]) :",Array.isArray([])); // true
console.log("Array.isArray(arr) :",Array.isArray(ar)); // true