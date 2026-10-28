class Vehiculo {
    #id;
    #capacidad;
    #ocupado;

    constructor(id, capacidad) {
        this.#id = id;
        this.#capacidad = capacidad;
        this.#ocupado = false;
    }

    get id() {
        return this.#id;
    }

    get capacidad() {
        return this.#capacidad;
    }

    get ocupado() {
        return this.#ocupado;
    }

    ocupar() {
        this.#ocupado = true;
    }

    liberar() {
        this.#ocupado = false;
    }
}

const vehiculo1 = new Vehiculo("V01", 4);

vehiculo1.ocupar();

console.log(vehiculo1.id);
console.log(vehiculo1.capacidad);
console.log(vehiculo1.ocupado);