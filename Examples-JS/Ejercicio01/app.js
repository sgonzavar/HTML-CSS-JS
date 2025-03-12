let libra = 160;
let Kilogramo = 0;

Kilogramo = libra / 2.20462;

Kilogramo *= 100; // se iguala para poder sacar 2 exponentes mas del resultado despues del punto
Kilogramo = Math.round(Kilogramo); // Redondea el valor para imprimirlo sin despues del punto
Kilogramo /= 100; // se iguala para poder sacar 2 exponentes mas del resultado despues del punto

console.log(`El total de libras ${libra} a Kilos es ${Kilogramo}`);