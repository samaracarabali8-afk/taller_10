class Reserva {
    constructor(codigo, cliente, fecha, precio) {
        this.codigo = codigo;
        this.cliente = cliente;
        this.fecha = fecha;
        this.precio = precio;
    }
}

class ReservaHotel extends Reserva {
    constructor(codigo, cliente, fecha, precio, habitacion) {
        super(codigo, cliente, fecha, precio);
        this.habitacion = habitacion;
    }
}

class ReservaTour extends Reserva {
    constructor(codigo, cliente, fecha, precio, recorrido) {
        super(codigo, cliente, fecha, precio);
        this.recorrido = recorrido;
    }
}

console.log(
    new ReservaHotel("R01", "Samara", "2026-12-10", 200000, "Doble")
);

console.log(
    new ReservaTour("R02", "Maira", "2026-12-15", 80000, "Centro histórico")
);