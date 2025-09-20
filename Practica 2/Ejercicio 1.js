const persona ={
    nombre: "Ivan Isay",
    Edad: 37,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};

const {nombre, Edad, direccion: {ciudad}} = persona;

console.log("Me llamo " + nombre + ", " + Edad + " y vivo en " + ciudad);