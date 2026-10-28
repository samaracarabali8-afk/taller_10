class Cuenta {
    constructor(numero, titular, saldo) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }

    mostrarDatos() {
        console.log(this.numero, this.titular, this.saldo);
    }
}

class CuentaAhorros extends Cuenta {
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo);
        this.tipo = "Ahorros";
    }
}

class CuentaCorriente extends Cuenta {
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo);
        this.tipo = "Corriente";
    }
}

const cuenta1 = new CuentaAhorros("A01", "Samara", 200000);
const cuenta2 = new CuentaCorriente("C01", "Maira", 300000);

cuenta1.mostrarDatos();
cuenta2.mostrarDatos();