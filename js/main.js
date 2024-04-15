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
}
//////////////////////////////////////////

//definición de la clase
class Tarea {
    constructor(texto) {
        console.log("construct");
        this.texto = "hola";
    }
}

//crear las instancias de la clase
let tarea1 = new Tarea(); //los parentesis hacen referencia al constructor
console.log(tarea1.texto);
let tarea2 = new Tarea();