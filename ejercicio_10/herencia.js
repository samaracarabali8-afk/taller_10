class Mascota {
    constructor(id, nombre, edad) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrar() {
        console.log(this.id, this.nombre, this.edad);
    }
}

class Perro extends Mascota {
    constructor(id, nombre, edad) {
        super(id, nombre, edad);
        this.tipo = "Perro";
    }
}

class Gato extends Mascota {
    constructor(id, nombre, edad) {
        super(id, nombre, edad);
        this.tipo = "Gato";
    }
}

const perro1 = new Perro("M01", "Luna", 2);
const gato1 = new Gato("M02", "Michi", 1);

console.log(perro1);
console.log(gato1);