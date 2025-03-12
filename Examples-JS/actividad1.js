class Persona {

    static contadorPersona = 0;

    constructor(nombre, apellido, edad) {
        this.idPersona = ++Persona.contadorPersona;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    get getIdPersona() {
        return this.idPersona;
    }

    get getNombre() {
        return this.nombre;
    }

    get getApellido() {
        return this.apellido;
    }

    get getEdad() {
        return this.edad;
    }

    set setNombre(nombre) {
        this.nombre = nombre;
    }

    set setApellido(apellido) {
        this.apellido = apellido;
    }

    set setEdad(edad) {
        this.edad = edad;
    }

    toString() {
        return `
                ${this.idPersona} 
                ${this.nombre} 
                ${this.apellido} 
                ${this.edad}`;
    }
}

class Empleado extends Persona {

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this.idEmpleado = ++Empleado.contadorEmpleados;
        this.sueldo = sueldo;
    }

    get getIdEmpleado() { 
        return this.idEmpleado;
    }

    get getSueldo() { 
        return this.sueldo;
    }

    set setSueldo(sueldo) {
        this.sueldo = sueldo;
    }

    toString() {
        return `${super.toString()}
                ${this.idEmpleado} 
                ${this.sueldo}`;
    }
}

class Cliente extends Persona {

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this.idCliente = ++Cliente.contadorClientes;
        this.fechaRegistro = fechaRegistro;
    }

    get getIdCliente() {
        return this.idCliente
    }

    get getFechaRegistro() {
        return this.fechaRegistro;
    }

    set setFechacliente(fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    toString() {
        return `${super.toString()} ${this.idCliente} ${this.fechaRegistro}`;
    }
}


let person1 = new Persona("juan", "gil", 25);
let employee1 = new Empleado(person1.getNombre, person1.getApellido, person1.getEdad, "2500000");
let cliente1 = new Cliente(person1.getNombre, person1.getApellido, person1.getEdad, "15/05/2005");

console.log(person1.toString());
console.log(employee1.toString());
console.log(cliente1.toString());
