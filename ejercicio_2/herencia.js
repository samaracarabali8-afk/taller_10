class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

class ProductoFisico extends Producto {
    constructor(id, nombre, precio) {
        super(id, nombre, precio);
        this.tipo = "Físico";
    }
}

class ProductoDigital extends Producto {
    constructor(id, nombre, precio) {
        super(id, nombre, precio);
        this.tipo = "Digital";
    }
}

const producto1 = new ProductoFisico("P01", "Teclado", 80000);
const producto2 = new ProductoDigital("P02", "Curso", 50000);

console.log(producto1);
console.log(producto2);