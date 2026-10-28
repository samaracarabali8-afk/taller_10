class Profesional {
    duracionConsulta() {
        return 15;
    }
}

class MedicoGeneral extends Profesional {
    duracionConsulta() {
        return 20;
    }
}

class Especialista extends Profesional {
    duracionConsulta() {
        return 40;
    }
}

const profesionales = [
    new MedicoGeneral(),
    new Especialista()
];

profesionales.forEach(profesional => {
    console.log(
        "Duración:",
        profesional.duracionConsulta(),
        "minutos"
    );
});