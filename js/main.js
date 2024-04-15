class Tarea {
    constructor(texto, id) {
        console.log("tarea instanciada! con el texto:", texto);
        this.texto = texto;
        this.id = id;
        this.fecha = new Date();
    }

    fechaHoy() {  
        this.fecha = new Date();
    }

    mostrarFecha() {
        console.log(this.fecha);
    }
}
//////////////////////////////////////////

//definición de la clase
class Tarea {
    constructor(textoDeLaVariableOParametro) {
        console.log("se ha construido");
        this.texto = texto; //este texto no tiene nada que ver con el del constructor
        this.id = id;
        this.fecha = new Date(); //se genera de manera automatica
    }
}

//crear las instancias de la clase
let tarea1 = new Tarea("Comprar leche", 1); //los parentesis hacen referencia al constructor
let tarea2 = new Tarea("Comprar huevos", 2);

console.log(tarea1);
console.log(tarea2);