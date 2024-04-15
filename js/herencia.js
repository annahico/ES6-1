class Padre {
    cosntructos(){
        console.log("Hola desde el constructor del padre");
    }
}


class Hija extends Padre {
    constructor(){
        super(); //asi invocamos al constructor padre a la clase hija
        console.log("Hola desde el contructor hija");
    }
}

let padre = new Padre();
let hija = new Hija();


