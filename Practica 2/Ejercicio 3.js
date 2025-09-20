const personas = [
    {nombre: "Ana", edad: 22 },
    {nombre:"Luis", edad: 35 },
    {nombre:"Maria", edad: 28 }
];

const Luis = personas.find(personas => personas.nombre == "Luis");

console.log("Hola soy " + Luis.nombre);

personas.forEach(personas => {
    console.log(personas.nombre + " tiene " + personas.edad + " años");
});

const sumaTotal = personas.reduce((suma,personas) => suma + personas.edad,0);

console.log("" + sumaTotal);
