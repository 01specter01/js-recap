console.log("Aufgabe 1");
function canNest(arr1, arr2) {
    if (
        Math.max(...arr1) < Math.max(...arr2) &&
        Math.min(...arr1) > Math.min(...arr2)
    ) {
        return true;
    } else {
        return false;
    }
}
console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([3, 1], [4, 0]));
console.log(canNest([9, 9, 8], [8, 9]));
console.log(canNest([1, 2, 3, 4], [2, 3]));
console.log();
console.log("Aufgabe 2");

class Kreis {
    constructor(r) {
        this.r = r;
    }

    getArea() {
        return Math.PI * Math.pow(this.r, 2);
    }
    getPerimeter() {
        return 2 * Math.PI * this.r;
    }
}
let kreis1 = new Kreis(11);
console.log(kreis1.getArea()); //Should return 380.132711084365

let kreis = new Kreis(4.44);
console.log(kreis.getPerimeter()); //Should return 27.897342763877365

console.log();
console.log("Aufgabe 3");

function makePlusFunction(num) {
    return function (num2) {
        return num2 + num;
    };
}

const plusFive = makePlusFunction(5);
console.log(plusFive(2)); // returns 7
console.log(plusFive(-8)); // returns 3

const plusTen = makePlusFunction(10);
console.log(plusTen(0)); // returns 10
console.log(plusTen(188)); // returns 198

console.log();
console.log("Aufgabe 4");

function colorPatternTimes(Array) {
    let count = 0;
    for (let i = 0; i < Array.length - 1; i++) {
        if (Array[i] != Array[i + 1]) {
            count++;
        }
    }
    return Array.length * 2 + count;
}
console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"]));
console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"]));
console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]));
console.log(colorPatternTimes(["Blue"]));

console.log("Callback");

function foo(bar) {
    bar();
}

foo(function () {
    console.log("bar");
});

//Pizza Hub
function orderPizza(type, name, callback) {
    console.log("Ordering pizza...");
    setTimeout(function () {
        let msg = `Your ${type} ${name} Pizza is ready! The total bill is $13!`;
        console.log(`On the Pizzahub server: ${msg}`);
        callback(msg);
    }, 7000);
}

//Robin's Phone
orderPizza("veg", "cheese", function (msg) {
    console.log(`On Robin's phone: ${msg}`);
});
