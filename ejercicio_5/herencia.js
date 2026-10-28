class Empleado {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}

class EmpleadoPlanta extends Empleado {
    constructor(id, nombre, salario) {
        super(id, nombre);
        this.salario = salario;
    }
}

class Contratista extends Empleado {
    constructor(id, nombre, tarifa, horas) {
        super(id, nombre);
        this.tarifa = tarifa;
        this.horas = horas;
    }
}

const empleado1 = new EmpleadoPlanta("E01", "Maira", 1800000);
const empleado2 = new Contratista("E02", "Samara", 20000, 80);

console.log(empleado1);
console.log(empleado2);