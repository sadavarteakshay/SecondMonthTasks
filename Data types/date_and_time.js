
let now = new Date();
console.log( now ); // shows current date/time



let Jan01_1970 = new Date(0);
console.log(" Jan01_1970 :-",Jan01_1970 );

let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(" Jan02_1970 :-",Jan02_1970 );

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(" Dec31_1969 :-",Dec31_1969 );


let date = new Date("2022-01-30");
console.log("date :-" ,date);


//new Date(year, month, date, hours, minutes, seconds, ms)
let date1 = new Date(2022, 2, 21, 2, 3, 4, 222);
console.log("date1 :-" ,date1);



console.log("now.getFullYear :-" ,now.getFullYear());
console.log("now.getMonth    :-" ,now.getMonth());
console.log("now.getDay      :-" ,now.getDay());
console.log("now.getDate     :-" ,now.getDate());
console.log("now.getHours    :-" ,now.getHours());
console.log("now.getTimezoneOffset    :-" ,now.getTimezoneOffset());


let newDate = new Date();
console.log("newDate.getFullYear :-" ,newDate.setFullYear(2023));
/* console.log("newDate.getMonth    :-" ,newDate.setMonth(12,31));
console.log("newDate.getDate     :-" ,newDate.setDate(31));
console.log("newDate.getHours    :-" ,newDate.setHours(12)); */
console.log("newDate     :-" ,newDate);


//Date.now() that returns the current timestamp. 
console.log("Date.now()   :-" ,Date.now()); // milliseconds count from 1 Jan 1970

//Date.parse from a string. The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ

let pasreDate = Date.parse('2022-02-26T13:51:50.417-07:00');

let date2 = new Date(pasreDate);
console.log("Date     :-" ,date2);