class Empleado {
    #id;
    #nombre;

    constructor(id, nombre) {
        this.#id = id;
        this.#nombre = nombre;
    }

    get id() {
        return this.#id;
    }

    get nombre() {
        return this.#nombre;
    }
}

class Nomina {
    #empleados;

    constructor() {
        this.#empleados = [];
    }

    agregar(empleado) {
        this.#empleados.push(empleado);
    }

    listar() {
        return this.#empleados.map(empleado => empleado.nombre);
    }
}

const nomina = new Nomina();

nomina.agregar(new Empleado("E01", "Maira"));

console.log(nomina.listar());