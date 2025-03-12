// Se tiene la siguiente información de un empleado:
// · código del empleado,
// · nombres,
// · número de horas trabajadas al mes,
// · valor hora trabajada,
// · porcentaje de retención en la fuente.
// Haga un algoritmo que muestre: código, nombres, salario bruto y salario neto.


let person = {
    cod: 1,
    name: 'juan',
    horas: 48,
    valorHora: 5000,
    retencion: 10 // 10%
}

let bruto = person.horas * person.valorHora;
let neto = bruto - (bruto * person.retencion / 100 );
console.log('Valor Bruto :' , bruto);
console.log('Valor Neto :' , neto);