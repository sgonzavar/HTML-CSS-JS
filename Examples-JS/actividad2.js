class Producto {
    
    static contadorProductos = 0;

    constructor(nombre, precio) {
        this.idProducto = ++ Producto.contadorProductos;
        this.nombre = nombre;
        this.precio = precio;
    }

    get getIdProducto() {
        return this.idProducto;
    }

    get getNombre() {
        return this.nombre;
    }

    get getPrecio() {
        return this.precio;
    }

    set setNombre(nombre) {
        this.nombre = nombre;
    }

    set setPrecio(precio) {
        this.precio = precio;
    }

    toString() {
        return `idProducto : ${this.idProducto} 
nombre = ${this.nombre} precio = ${this.precio}`;
    }
}

class Orden {

    static contadorOrden = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    } 

    constructor( ){
        this.idOrden = ++Orden.contadorOrden;
        this.productos = [];
        this.contadorProductosAgregados = 0;
    }

    get getIdOrden(){
        return this.idOrden;
    }

    agregarProductos(producto){
        if(this.productos.length < Orden.MAX_PRODUCTOS){
            console.log("se agrego")
            this.productos.push(producto);
        }
        else {
            console.log("no se pueden agregar mas productos");
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let item of this.productos){
            totalVenta += item.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let ordenProducto = '';

        // for(let producto of this.productos){
        //     ordenProducto += '\n { '+ producto.toString() + '}';
        // }

        this.productos.forEach((item) => {
            ordenProducto += '\n { '+ item.toString() + '}';
        });
        console.log(`Orden: ${this.idOrden} Total: ${this.calcularTotal()} Productos: ${ordenProducto}`);
    }
}

let pro1 = new Producto("Pantalon", 15000);
let pro2 = new Producto("Camiseta", 25000);
let pro3 = new Producto("Gorra", 100000);

let ord1 = new Orden();

ord1.agregarProductos(pro1);
ord1.agregarProductos(pro2);
ord1.agregarProductos(pro3);
ord1.mostrarOrden();