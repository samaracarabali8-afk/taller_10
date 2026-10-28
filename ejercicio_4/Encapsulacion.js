class Profesional {
    #id;
    #nombre;
    #horarios;

    constructor(id, nombre) {
        this.#id = id;
        this.#nombre = nombre;
        this.#horarios = [];
    }

    get id() {
        return this.#id;
    }

    get nombre() {
        return this.#nombre;
    }

    reservar(horario) {
        if (this.#horarios.includes(horario)) {
            console.log("Horario ocupado");
        } else {
            this.#horarios.push(horario);
            console.log("Cita reservada");
        }
    }
}

const medico1 = new Profesional("M01", "Ana");

medico1.reservar("09:00");

console.log(medico1.nombre);