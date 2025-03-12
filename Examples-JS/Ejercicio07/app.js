function masLargo(arr) {

    let nombreLargo = "";

    for (let i = 0; i < arr.length; i++) {

        let nombre = arr[i];

        if (nombre.length > nombreLargo.length) {
            nombreLargo = nombre;
        }
    }
    return nombreLargo;
}

let heroes = ['Rose', 'Deadpool', 'Ciclope', 'Profer Charles Xavier', 'Tormenta', 'Wolverine'];

let heroesLargo = masLargo(heroes);
console.log(heroesLargo);