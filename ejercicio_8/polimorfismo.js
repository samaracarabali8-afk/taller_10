class Servicio {
    constructor(tarifa) {
        this.tarifa = tarifa;
    }

    calcularCosto(horas) {
        return this.tarifa * horas;
    }
}

class Electricidad extends Servicio {
    calcularCosto(horas) {
        return super.calcularCosto(horas) + 15000;
    }
}

class Plomeria extends Servicio {
    calcularCosto(horas) {
        return super.calcularCosto(horas) + 10000;
    }
}

class Mantenimiento extends Servicio {
    calcularCosto(horas) {
        return super.calcularCosto(horas);
    }
}

const servicios = [
    new Electricidad(40000),
    new Plomeria(35000),
    new Mantenimiento(30000)
];

servicios.forEach(servicio => {
    console.log("Costo:", servicio.calcularCosto(2));
});