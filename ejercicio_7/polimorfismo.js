class ItemMenu {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    calcularPrecio(adicional = 0) {
        return this.precio + adicional;
    }
}

class Plato extends ItemMenu {
    calcularPrecio(adicional = 0) {
        return super.calcularPrecio(adicional);
    }
}

class Bebida extends ItemMenu {
    calcularPrecio(adicional = 0) {
        return super.calcularPrecio(adicional) * 1.05;
    }
}

const plato1 = new Plato("Hamburguesa", 18000);
const bebida1 = new Bebida("Jugo", 5000);

console.log(plato1.calcularPrecio(1000));
console.log(bebida1.calcularPrecio(1000));