function describirPersona(p) {


    console.log(`${p.nombre} tiene una edad ${p.edad} y mide ${p.estatura}`);
}

let persona = {
    nombre: "juan",
    apellido: "perez",
    edad: 34,
    estatura: 1.78
}

describirPersona(persona);