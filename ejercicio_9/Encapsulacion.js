class Reserva {
    #codigo;
    #cliente;
    #fecha;
    #precio;
    #cancelada;

    constructor(codigo, cliente, fecha, precio) {
        this.#codigo = codigo;
        this.#cliente = cliente;
        this.#fecha = fecha;
        this.#precio = precio;
        this.#cancelada = false;
    }

    get codigo() {
        return this.#codigo;
    }

    get cliente() {
        return this.#cliente;
    }

    get precio() {
        return this.#precio;
    }

    get cancelada() {
        return this.#cancelada;
    }

    cancelar() {
        this.#cancelada = true;
    }
}

const reserva1 = new Reserva(
    "R01",
    "Samara",
    "2026-12-10",
    200000
);

console.log(reserva1.cliente);
console.log(reserva1.precio);

reserva1.cancelar();

console.log(reserva1.cancelada);