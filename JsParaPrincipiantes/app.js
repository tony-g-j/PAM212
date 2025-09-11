document.write("<h1>Hello World</h1>");
//tipos de datos
    "Hello world"//string
    'Hello world'//string

    100 //entero o int
    15.5 //decimal o float

    true //boleano
    false //boleano

    // array
        ['joe', 'ryan', 'martha']
        [1,2,3,4]
    
    // object
    paco{
        "username":'ryan',
        "score": 70.4,
        "hours": 14,
        "professional": true
    }

// prueba en consola
console.log('this is a string')
console.log(true)
console.log([1, 2, 3, 4])
console.log({"Username": "ryan",
    "score": 70.4
})

// variables y constantes

var nombredelusuario = "Jhon";
console.log(nombredelusuario)

let lastname = "carter";
console.log(lastname)

nombredelusuario = "pepe";

console.log(nombredelusuario)

const PI = 3.1415;
const id= 'user1';

console.log(PI)

//camelcase
let userName = 'gordon';

// esto es un comentario
/* este tambien */

//Operadores(+, -, *, /, <, >)
    //numeros
    let numberOne = 60;
    let numberTwo = 100;

    let result = numberOne + numberTwo; // suma
    let result = numberOne - numberTwo; // resta
    let result = numberOne * numberTwo; // multiplicación
    let result = numberOne / numberTwo; // división
    let result = numberOne < numberTwo; // comparación 1
    let result = numberOne == numberTwo; //comparación 2
    let result = numberOne != numberTwo; //comparación 3

    console.log(result);
    //string
    let name = 'Jhon';
    let last = 'Carter';

    let completeName = name + last;

//condicionales

    if(result === true){
        console.log('login correcto')
    }

    if (result === false) {
        console.log('login incorrecto')
    }

    if (result == true) {
        console.log('login correcto')
    } else {
        console.log('contraseña incorrecta')
    }

    let typeCard = 'debit card';

    switch(typeCard){
        case 'debit card':
            console.log('tarjeta de debito')
            break;
        case 'credit card':
            console.log('tarjeta de credito')
            break;
        default:
            console.log('sin tarjeta')
    }

//Bucles
    let count = 50;

    while(count > 0){
        console.log('hello world')
        count = count - 1;
    }

    while (count > o) {
        console.log(count)
        count++;
    }

    let names = ['ryan', 'joe', 'jhom'];

    console.log(names[0]);
    console.log(names.length)

    for (let i = 0; i < array.length; i++) {
        console.log(names[i]);
    }

    for (let i = names.length - 1; i < 0; i--){
        console.log(names[i]);
    }

//funciones

    function greeting(){ //definicion de la funcion
        console.log('hello');
    }

    greeting(); //llamado de la funcion

    function greeting(name){ //definicion de la funcion pasandole un valor
        console.log('hello' + name);
    }

    greeting('paco');
    greeting('pancho');
    greeting('maria');
