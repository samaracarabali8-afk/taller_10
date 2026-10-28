class Vehiculo {
    constructor(id, capacidad) {
        this.id = id;
        this.capacidad = capacidad;
    }

    mostrar() {
        console.log(this.id, this.capacidad);
    }
}

class Automovil extends Vehiculo {
    constructor(id, capacidad) {
        super(id, capacidad);
        this.tipo = "Automóvil";
    }
}

class Motocicleta extends Vehiculo {
    constructor(id, capacidad) {
        super(id, capacidad);
        this.tipo = "Motocicleta";
    }
}

class Bicicleta extends Vehiculo {
    constructor(id, capacidad) {
        super(id, capacidad);
        this.tipo = "Bicicleta";
    }
}

const vehiculos = [
    new Automovil("A01", 4),
    new Motocicleta("M01", 2),
    new Bicicleta("B01", 1)
];

vehiculos.forEach(vehiculo => console.log(vehiculo));