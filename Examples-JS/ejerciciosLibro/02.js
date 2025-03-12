// Un empleado trabaja 48 horas en la semana a razón de $5.000 hora. El porcentaje de
// retención en la fuente es del 12,5% del salario bruto. Se desea saber cuál es el salario bruto,
// la retención en la fuente y el salario neto del trabajador.

const HOURS = 48;
const VALUE_HOURS = 5000;
const withholding_source = 12.5;

let total = HOURS * VALUE_HOURS;
let neto_total = total - (total * 0.125);

console.log("Total" , total);
console.log("neto" , neto_total);