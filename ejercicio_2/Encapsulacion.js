class Producto {
    #id;
    #nombre;
    #precio;

    constructor(id, nombre, precio) {
        this.#id = id;
        this.#nombre = nombre;
        this.#precio = precio;
    }

    get nombre() {
        return this.#nombre;
    }

    get precio() {
        return this.#precio;
    }

    calcularTotal(cantidad) {
        return this.#precio * cantidad;
    }
}

const producto1 = new Producto("P01", "Teclado", 80000);

console.log(producto1.nombre);
console.log(producto1.precio);
console.log(producto1.calcularTotal(2));