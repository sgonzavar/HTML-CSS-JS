class Carro {

    constructor(marca, tipo, puerta) {

        this.marca = marca;
        this.tipo = tipo;
        this.puerta = puerta;
        this.creado = "Hoy";
        this.encendido = false;
        this.gasolina = 100;

    }

    encenderCarro() {
        if (this.encendido == true) {
            console.error("Carro Encendido");
        } else {
            this.encendido = true;
            console.error("Carro Encendido");
        }

        return this;
    }

    realizarViaje(consumo) {

        if (!this.encendido == true) {
            this.encenderCarro();
        }
        if (consumo > this.gasolina) {
            console.log(`No se puede Realizar el viaje ${consumo} es mayor que ${this.gasolina}`);
        } else {
            this.gasolina = this.gasolina - consumo;
            console.log("Viaje se realizo con exito");
        }
    }
}

//encenderCarro()

let Carro1 = new Carro("Mazda", "Sedan", 2);

//console.log(Carro.encenderCarro);