class Cuenta {
    #numero;
    #titular;
    #saldo;

    constructor(numero, titular, saldo) {
        this.#numero = numero;
        this.#titular = titular;
        this.#saldo = saldo;
    }

    get numero() {
        return this.#numero;
    }

    get titular() {
        return this.#titular;
    }

    get saldo() {
        return this.#saldo;
    }

    consignar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
    }

    retirar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
        }
    }
}

const cuenta = new Cuenta("001", "Samara", 200000);
cuenta.consignar(50000);

console.log(cuenta.numero);
console.log(cuenta.titular);
console.log(cuenta.saldo);