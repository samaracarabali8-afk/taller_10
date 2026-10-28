class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    costoFinal() {
        return this.precio;
    }
}

class ProductoFisico extends Producto {
    costoFinal() {
        return this.precio * 1.10;
    }
}

class ProductoDigital extends Producto {
    costoFinal() {
        return this.precio;
    }
}

const productos = [
    new ProductoFisico("Teclado", 80000),
    new ProductoDigital("Curso", 50000)
];

productos.forEach(producto => {
    console.log(producto.nombre, producto.costoFinal());
});