class Empleado {
    calcularPago() {
        return 0;
    }
}

class EmpleadoPlanta extends Empleado {
    constructor(salario, bono) {
        super();
        this.salario = salario;
        this.bono = bono;
    }

    calcularPago() {
        return this.salario + this.bono;
    }
}

class Contratista extends Empleado {
    constructor(tarifa, horas) {
        super();
        this.tarifa = tarifa;
        this.horas = horas;
    }

    calcularPago() {
        return this.tarifa * this.horas;
    }
}

const empleados = [
    new EmpleadoPlanta(1800000, 100000),
    new Contratista(20000, 80)
];

empleados.forEach(empleado => {
    console.log("Pago:", empleado.calcularPago());
});