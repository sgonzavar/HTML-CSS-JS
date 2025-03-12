let Numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];
let NumeroMayor = -1;

for (let i = 0; i <= 8; i++) {
    if (Numeros[i] > NumeroMayor) {
        NumeroMayor = Numeros[i];
    }
    if (Numeros[i] % 2 == 0) {
        console.log(Numeros[i] + " es un numero par ");
    } else {
        console.log(Numeros[i] + " es un numero impar ");
    }
}

console.log("El numero mayor es " + NumeroMayor);