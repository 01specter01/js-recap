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
console.log(kreis1.getArea()); // Should return 380.132711084365

let kreis = new Kreis(4.44);
console.log(kreis.getPerimeter()); // Should return 27.897342763877365
