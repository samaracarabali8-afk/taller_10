class Recurso {
    constructor(codigo, titulo) {
        this.codigo = codigo;
        this.titulo = titulo;
    }

    mostrar() {
        console.log(this.codigo, this.titulo);
    }
}

class LibroImpreso extends Recurso {
    constructor(codigo, titulo) {
        super(codigo, titulo);
        this.formato = "Impreso";
    }
}

class RecursoDigital extends Recurso {
    constructor(codigo, titulo) {
        super(codigo, titulo);
        this.formato = "Digital";
    }
}

const libro1 = new LibroImpreso("L01", "Novela");
const recurso1 = new RecursoDigital("D01", "Manual PDF");

console.log(libro1);
console.log(recurso1);