class Recurso {
    plazoDias() {
        return 7;
    }
}

class LibroImpreso extends Recurso {
    plazoDias() {
        return 14;
    }
}

class RecursoDigital extends Recurso {
    plazoDias() {
        return 3;
    }
}

const recursos = [
    new LibroImpreso(),
    new RecursoDigital()
];

recursos.forEach(recurso => {
    console.log("Plazo:", recurso.plazoDias(), "días");
});