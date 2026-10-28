class Mascota {
    cuidados() {
        return "Agua, alimento y revisión veterinaria";
    }
}

class Perro extends Mascota {
    cuidados() {
        return "Paseos diarios, vacunas y alimento adecuado";
    }
}

class Gato extends Mascota {
    cuidados() {
        return "Arenero limpio, rascador, vacunas y alimento adecuado";
    }
}

const mascotas = [
    new Perro(),
    new Gato()
];

mascotas.forEach(mascota => {
    console.log(mascota.cuidados());
});