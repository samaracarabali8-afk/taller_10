class Cuenta {
    reglaRetiro() {
        return "Regla general de retiro";
    }
}

class CuentaAhorros extends Cuenta {
    reglaRetiro() {
        return "Solo permite retirar el saldo disponible";
    }
}

class CuentaCorriente extends Cuenta {
    reglaRetiro() {
        return "Permite utilizar el sobregiro autorizado";
    }
}

const cuentas = [
    new CuentaAhorros(),
    new CuentaCorriente()
];

cuentas.forEach(cuenta => {
    console.log(cuenta.reglaRetiro());
});