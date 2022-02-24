function square(x) {

    return x * x;

}


function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {    // if there's such key in cache
            console.log("result from cache :-");
            return cache.get(x); // read the result from it
        }

        let result = func(x);  // otherwise call func
        console.log("result from function :-");

        cache.set(x, result);  // and cache (remember) the result
        return result;
    };
}

square = cachingDecorator(square);

console.log(square(4), "\n");
console.log(square(4), "\n");
console.log(square(9));




console.log("\n\n------------------------Using “func.call” for the context -----------------------------");

let tax = {
    gst() {
        return 0.16;
    },

    deduction(x) {
        console.log("Salary is " + x);
        return x * this.gst();
    }
};

function taxCachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            console.log("\nresult from cache :-");
            return cache.get(x);
        }
        let result = func.call(this, x); // "this" is passed correctly now
        cache.set(x, result);
        return result;
    };
}

tax.deduction = taxCachingDecorator(tax.deduction); // now make it caching

console.log("tax.deduction(20000) :-", tax.deduction(20000)); // works
console.log("tax.deduction(20000) :-", tax.deduction(20000)); // works, doesn't call the original (cached)



console.log("\n\n------------------------ Going multi-argument-----------------------------");

let calculator = {
    add(a, b) {
        console.log(`Addition of  ${a},${b}`);
        return a + b;
    }
};


function multiAgrsCachingDecorator(func) {
    let cache = new Map();

    return function () {
        let key = hashing(arguments);
        if (cache.has(key)) {
            console.log("\nresult from cache :-");
            return cache.get(key);
        }

        let result = func.call(this, ...arguments); // (**)

        cache.set(key, result);
        return result;
    };
}

//function for hashing
function hashing(args) {
    return args[0] + ',' + args[1];
}


calculator.add = multiAgrsCachingDecorator(calculator.add);
console.log("calculator.add(93, 50) :-",calculator.add(93, 50)); // works
console.log("Again calculator.add(93, 50) :- " + calculator.add(93, 50)); // same (cached)
