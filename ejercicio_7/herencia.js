class ItemMenu {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Plato extends ItemMenu {
    constructor(id, nombre, precio) {
        super(id, nombre, precio);
        this.categoria = "Plato";
    }
}

class Bebida extends ItemMenu {
    constructor(id, nombre, precio) {
        super(id, nombre, precio);
        this.categoria = "Bebida";
    }
}

const plato1 = new Plato("P01", "Hamburguesa", 18000);
const bebida1 = new Bebida("B01", "Jugo", 5000);

console.log(plato1);
console.log(bebida1);