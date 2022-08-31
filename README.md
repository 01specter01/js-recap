# js-recap

# Aufgabe 1

​
[Englische Version](https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj)
​
Erstellen Sie eine Funktion, die true zurückgibt, wenn das erste Array im zweiten verschachtelt werden kann.
​
arr1 kann innerhalb von arr2 verschachtelt werden, wenn:
​

-   arr1's kleinste Zahl größer ist als arr2's kleinste Zahl.
-   arr1's größte Zahl kleiner ist als arr2's größte Zahl.
    ​

## Beispiele:

​

```js
​
canNest([1, 2, 3, 4], [0, 6]) ➞ true
​
canNest([3, 1], [4, 0]) ➞ true
​
canNest([9, 9, 8], [8, 9]) ➞ false
​
canNest([1, 2, 3, 4], [2, 3]) ➞ false
​
```

Ausblenden

Nachricht an aufgaben

# Aufgabe 2

​
[Englische Version](https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ)
​
Deine Aufgabe ist es, eine Kreis Klasse zu erstellen. Die konstruierten Kreise müssen zwei Methoden haben: getArea() (PI*r^2) und getPerimeter() (2*PI\*r), die sowohl die jeweilige Fläche als auch den Umfang angeben.
​

## Examples

​

```js
let circy = new Circle(11);
circy.getArea(); // Should return 380.132711084365
​
let circy = new Circle(4.44);
circy.getPerimeter(); // Should return 27.897342763877365
```
