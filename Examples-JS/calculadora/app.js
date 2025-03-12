console.log("enlazado");

let allData = document.forms['form'];
let numberA = allData['numberOne'];
let numberB = allData['numberTwo'];

/** --------------------- plus ------------------------------------------- */
let plus = document.getElementById("plus");
plus.addEventListener('click', () => {
    let a = parseInt(numberA.value, 10);
    let b = parseInt(numberB.value, 10);
    let result = a + b;

    if(isNaN(result)) {
        document.getElementById("result").innerHTML = `Ingrese valores`;
    } else {
        document.getElementById("result").innerHTML = `Resultado: ${result}`;
    }
    console.log("result", result);
});

/** --------------------- end plus ------------------------------------------- */


/** --------------------- rest ------------------------------------------- */

let rest = document.getElementById("rest");
rest.addEventListener('click', () => {
    let a = parseInt(numberA.value, 10);
    let b = parseInt(numberB.value, 10);
    let result = a - b;

    if(isNaN(result)) {
        document.getElementById("result").innerHTML = `Ingrese valores`;
    } else {
        document.getElementById("result").innerHTML = `Resultado: ${result}`;
    }
    console.log("result", result);
});

/** --------------------- end rest ------------------------------------------- */

/** --------------------- multi ------------------------------------------- */

let multi = document.getElementById("multi");
multi.addEventListener('click', () => {
    let a = parseInt(numberA.value, 10);
    let b = parseInt(numberB.value, 10);
    let result = a * b;

    if(isNaN(result)) {
        document.getElementById("result").innerHTML = `Ingrese valores`;
    } else {
        document.getElementById("result").innerHTML = `Resultado: ${result}`;
    }
    console.log("result", result);
});

/** --------------------- end multi ------------------------------------------- */

/** --------------------- div ------------------------------------------- */

let div = document.getElementById("div");
div.addEventListener('click', () => {
    let a = parseInt(numberA.value, 10);
    let b = parseInt(numberB.value, 10);
    if (b == 0 || isNaN(b) ) {
        document.getElementById("result").innerHTML = `la division no se puede realizar`;
    }else {
        let result = a / b;
        if(isNaN(result)) {
            document.getElementById("result").innerHTML = `Ingrese valores`;
        } else {
            document.getElementById("result").innerHTML = `Resultado: ${result}`;
        }
    }
    console.log("result", result);
});

/** --------------------- end div ------------------------------------------- */