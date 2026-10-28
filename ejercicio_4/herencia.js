class Profesional {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    mostrar() {
        console.log(this.id, this.nombre);
    }
}

class MedicoGeneral extends Profesional {
    constructor(id, nombre) {
        super(id, nombre);
        this.tipo = "Medicina general";
    }
}

class Especialista extends Profesional {
    constructor(id, nombre, especialidad) {
        super(id, nombre);
        this.especialidad = especialidad;
    }
}

const medico1 = new MedicoGeneral("M01", "Ana");
const medico2 = new Especialista("E01", "Luis", "Cardiología");

medico1.mostrar();
medico2.mostrar();