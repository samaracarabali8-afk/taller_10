class Recurso {
    #codigo;
    #titulo;
    #disponible;

    constructor(codigo, titulo) {
        this.#codigo = codigo;
        this.#titulo = titulo;
        this.#disponible = true;
    }

    get codigo() {
        return this.#codigo;
    }

    get titulo() {
        return this.#titulo;
    }

    get disponible() {
        return this.#disponible;
    }

    prestar() {
        if (this.#disponible) {
            this.#disponible = false;
            console.log("Préstamo realizado");
        }
    }

    devolver() {
        this.#disponible = true;
    }
}

const libro1 = new Recurso("L01", "Cien años de soledad");

libro1.prestar();

console.log(libro1.titulo);
console.log(libro1.disponible);