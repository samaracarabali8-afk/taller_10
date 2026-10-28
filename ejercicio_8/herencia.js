class Servicio {
    constructor(codigo, descripcion, tarifa) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.tarifa = tarifa;
    }
}

class Electricidad extends Servicio {
    constructor(codigo, descripcion, tarifa) {
        super(codigo, descripcion, tarifa);
        this.tipo = "Electricidad";
    }
}

class Plomeria extends Servicio {
    constructor(codigo, descripcion, tarifa) {
        super(codigo, descripcion, tarifa);
        this.tipo = "Plomería";
    }
}

class Mantenimiento extends Servicio {
    constructor(codigo, descripcion, tarifa) {
        super(codigo, descripcion, tarifa);
        this.tipo = "Mantenimiento";
    }
}

console.log(new Electricidad("S01", "Revisión", 40000));
console.log(new Plomeria("S02", "Tubería", 35000));
console.log(new Mantenimiento("S03", "General", 30000));