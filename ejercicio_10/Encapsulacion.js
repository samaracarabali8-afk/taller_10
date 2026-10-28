class Mascota {
    #id;
    #nombre;
    #edad;
    #adoptada;

    constructor(id, nombre, edad) {
        this.#id = id;
        this.#nombre = nombre;
        this.#edad = edad;
        this.#adoptada = false;
    }

    get id() {
        return this.#id;
    }

    get nombre() {
        return this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    get adoptada() {
        return this.#adoptada;
    }

    adoptar() {
        this.#adoptada = true;
    }
}

const mascota1 = new Mascota("M01", "Luna", 2);

mascota1.adoptar();

console.log(mascota1.nombre);
console.log(mascota1.adoptada);