class Servicio {
    #codigo;
    #descripcion;
    #tarifa;

    constructor(codigo, descripcion, tarifa) {
        this.#codigo = codigo;
        this.#descripcion = descripcion;
        this.#tarifa = tarifa;
    }

    get codigo() {
        return this.#codigo;
    }

    get descripcion() {
        return this.#descripcion;
    }

    get tarifa() {
        return this.#tarifa;
    }

    calcularCosto(horas) {
        return this.#tarifa * horas;
    }
}

const servicio1 = new Servicio("S01", "Electricidad", 40000);

console.log(servicio1.descripcion);
console.log(servicio1.calcularCosto(2));