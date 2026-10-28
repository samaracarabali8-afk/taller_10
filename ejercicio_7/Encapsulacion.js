class ItemMenu {
    #id;
    #nombre;
    #precio;
    #disponible;

    constructor(id, nombre, precio) {
        this.#id = id;
        this.#nombre = nombre;
        this.#precio = precio;
        this.#disponible = true;
    }

    get nombre() {
        return this.#nombre;
    }

    get precio() {
        return this.#precio;
    }

    get disponible() {
        return this.#disponible;
    }
}

const plato1 = new ItemMenu("P01", "Hamburguesa", 18000);

console.log(plato1.nombre);
console.log(plato1.precio);
console.log(plato1.disponible);