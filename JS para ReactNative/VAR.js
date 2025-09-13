
function EjemploVar(){
    if(true){
        var Num1 = 3; //Declaración de la variable dentro de su bloque 
        console.log("soy la variable: " + Num1); //llamado de la variable dentro de su bloque
    }
    console.log("también soy la variable: " + Num1); //llamado de la variable fuera de su bloque
}

EjemploVar();