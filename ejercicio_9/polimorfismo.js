class Reserva {
    constructor(precio) {
        this.precio = precio;
    }

    calcularCosto() {
        return this.precio;
    }
}

class ReservaHotel extends Reserva {
    calcularCosto() {
        return super.calcularCosto() * 1.10;
    }
}

class ReservaTour extends Reserva {
    calcularCosto() {
        return super.calcularCosto() + 15000;
    }
}

const reservas = [
    new ReservaHotel(200000),
    new ReservaTour(80000)
];

reservas.forEach(reserva => {
    console.log("Costo:", reserva.calcularCosto());
});