function max(a, b, c) {
    if (a > b && a > c) {
        console.log("El mayor es " + a);
    } else {
        if (b > a && b > c) {
            console.log("El mayor es " + b);
        } else {
            console.log("El mayor es " + c);
        }
    }
}

let mayor = max(5, 2, 6);
console.log(mayor);