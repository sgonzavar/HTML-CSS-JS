function filtratPorLetra(arr, letra) {

    let nuevoArr = [];

    for (let i = 0; i < arr.length; i++) {

        let hero = arr[i];
        if (hero[0] == letra) {

            nuevoArr.push(arr[i]);
        }

    }
    return nuevoArr;
}

let heroes = ['Rose', 'Deadpool', 'Ciclope', 'Profer Charles Xavier', 'Tormenta', 'Wolverine',
    'Doom', 'Dr Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'
];

let buscarHero = filtratPorLetra(heroes, "C");
console.log(buscarHero);