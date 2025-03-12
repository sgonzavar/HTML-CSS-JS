let persona1 = {
    nombre: "juan",
    apellido: "perez",
    edad: 34,
    estatura: 1.78
}

let persona2 = {
    nombre: "melissa",
    apellido: "gomez",
    edad: 30,
    estatura: 1.70
}

let persona3 = {
    nombre: "camila",
    apellido: "gil",
    edad: 40,
    estatura: 1.86
}

let persona = [persona1, persona2, persona3];

//console.log(persona);
for (let i = 0; i < persona.length; i++) {

    //let p = persona[i];
    console.log(`${persona[i].nombre} -- ${persona[i].edad}`);
}