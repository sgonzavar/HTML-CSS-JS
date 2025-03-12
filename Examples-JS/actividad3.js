class DispositivoEntrada {
    constructor(tipoEntrada, marca){
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }

    get getTipoEntrada(){
        return this.tipoEntrada;
    }

    get getMarca(){
        return this.marca;
    }

    set setTipoEntrada(tipoEntrada){
        this.tipoEntrada = tipoEntrada;
    }

    set setMarca(marca){
        this.marca = marca;
    }
}

class Raton extends DispositivoEntrada {

    static contadorRaton = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.contadorRaton;
    }

    get getIdRaton(){
        return this.idRaton;
    }

    toString() {
        return `Raton.....[id: ${this.idRaton} tipo Entrada: ${this.tipoEntrada} Marca: ${this.marca}]`;
    }
}

class Teclado extends DispositivoEntrada {

    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclado;
    }

    get getIdTeclado(){
        return this.idTeclado;
    }

    toString() {
        return `Teclado...[id: ${this.idTeclado} tipo Entrada: ${this.tipoEntrada} Marca: ${this.marca}]`;
    }
}

class Monitor {

    static contadorMonitor = 0;

    constructor(marca, tamaño){
        this.idMonitor = ++Monitor.contadorMonitor;
        this.marca = marca;
        this.tamaño = tamaño;
    }

    get getIdMonitor(){
        return this.idMonitor;
    }

    get getMarca(){
        return this.marca;
    }

    get getTamaño(){
        return this.tamaño;
    }

    set setMarca(marca){
        this.marca = marca;
    }

    set setTamaño(tamaño){
        this.tamaño = tamaño;
    }

    toString(){
        return `Monitor...[id: ${this.idMonitor} Marca: ${this.marca} Tamaño: ${this.tamaño}]`;
    }

}


class Computador {
    static ContadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this.idComputador = ++Computador.ContadorComputadoras;
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton
    }
    

    get getIdComputador(){
        return this.idComputador
    }

    toString(){
        return `Computador[id: ${this.idComputador} Nombre: ${this.nombre} 
        ${this.monitor} 
        ${this.teclado} 
        ${this.raton}]`;
    }
}

class Orden {
    static contadorOrden = 0;
    constructor(){
        this.idOrden = ++Orden.contadorOrden;
        this.computadoras = [];
    }

    get getIdOrden(){
        return this.idOrden;
    }

    agregarComputadoras(computador){
        this.computadoras.push(computador);
    }

    mostrarOrden(){
        let ordenComputadoras = '';
        this.computadoras.forEach((item) => {
            ordenComputadoras += '\n { '+ item.toString() + '}';
        });
        console.log(`Orden: ${this.idOrden} Computadoras: ${ordenComputadoras}`);
    }

}
let dip1 = new DispositivoEntrada("usb", "lenovo");
// console.log(dip1);

let rat1 = new Raton(dip1.getTipoEntrada, dip1.marca);
let tec1 = new Teclado(dip1.getTipoEntrada, 'HP');
let mon1 = new Monitor("HP", 24);
let comp1 = new Computador("001E", mon1, tec1, rat1);
let comp2 = new Computador("001F", mon1, tec1, rat1);
let comp3 = new Computador("001G", mon1, tec1, rat1);
let orden = new Orden();

orden.agregarComputadoras(comp1);
orden.agregarComputadoras(comp2);
orden.agregarComputadoras(comp3);
orden.mostrarOrden();

// console.log(rat1.toString());
// console.log(tec1.toString());
// console.log(mon1.toString());
// console.log(comp1.toString());
