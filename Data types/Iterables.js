


let marks = [10, 20, 30]

console.log("\nSymbol.iterator----------------------")
console.log("marks :- ", marks)
let iter = marks[Symbol.iterator]();  //Symbol.iterator (a special built-in symbol)


console.log("1. iter.next() :-", iter.next())
console.log("2. iter.next() :-", iter.next())
console.log("3. iter.next() :-", iter.next())
console.log("4. iter.next() :-", iter.next())
console.log("5. iter.next() :-", iter.next())

console.log("\nControl Over Iteration----------------------")
let marks1 = [10, 20, 30, 80]
let iter1 = marks1[Symbol.iterator]();
iter1.next()
console.log("2. iter1.next() :-", iter1.next())
console.log("3. iter1.next().value :-", iter1.next().value)
console.log("4. iter1.next() :-", iter1.next())




console.log("\nCustom Iterable----------------------")

function arrayIterator(arr) {

    let count = 0;

    return {
        next: function () {

            if (count <= arr.length) {
                return {
                    value: arr[count++],
                    done: false
                };
            }
            //return true if all elements are iterated
            return { done: true }
        }
    }
}

let arr = [10, 20, 30, 80]
let arrI = arrayIterator(arr);

console.log(arrI.next())
console.log(arrI.next())
console.log(arrI.next())
console.log(arrI.next())


//here’s the object that is array-like, but not iterable:
let arrayLike1 = { // has indexes and length => array-like
    0: "Hello",
    1: "World",
    length: 2
};

// Error (no Symbol.iterator)
//for (let item of arrayLike1) {}




console.log("\nArray.from----------------------")
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};

console.log("arrayLike :-", arrayLike)
let arr1 = Array.from(arrayLike);  //Creating array from arraysLike object
console.log("arr = Array.from(arrayLike); ")
console.log("arr.pop() :- ",arr1.pop()); // World (method works)