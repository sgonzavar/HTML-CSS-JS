//Si el valor interno de la variable A = 4, el de B = 5, de C = 1, L =.V. (Verdadero). Muestre
//cuáles son los valores impresos en el siguiente algoritmo.

let a = 4, b = 5, c = 1, l = true;

// let x = b * a - b **2/4 * c;
// let y = a * b / 3** 2;
// let z = (((b + c) /2 * a + 10) * 3 * b ) - 6
let p = a ** (1/2) ** b;
let r = a * b + a ** (1/2);
let s = b * a - b ** 2 / 4 * c;

//--------------------------------------------------------------------------------------------

let x = (a > b) && (!l) || (a ** 3 * 30);
let y = (b <= 100) && !(a > c) && (c = 1);
let z = ((b + 20) > (c - 1)) || ((a + 5) <= 50);

console.log("variables x = " , x);
console.log("variables y = " , y);
console.log("variables z = " , z);
console.log("variables p = " , p);
console.log("variables r = " , r);
console.log("variables s = " , s);

