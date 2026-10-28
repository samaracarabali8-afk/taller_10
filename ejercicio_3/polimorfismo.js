class Vehiculo {
    calcularCosto(km) {
        return km;
    }
}

class Automovil extends Vehiculo {
    calcularCosto(km) {
        return km * 2500;
    }
}

class Motocicleta extends Vehiculo {
    calcularCosto(km) {
        return km * 1500;
    }
}

class Bicicleta extends Vehiculo {
    calcularCosto(km) {
        return km * 500;
    }
}

const vehiculos = [
    new Automovil(),
    new Motocicleta(),
    new Bicicleta()
];

vehiculos.forEach(vehiculo => {
    console.log("Costo por 10 km:", vehiculo.calcularCosto(10));
});