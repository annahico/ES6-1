class Coche {
    constructor(nombre, marca) {
        this.nombre = nombre;
        this.marca = marca;
        this.velocidad = 0;
    }

    acelerar() {
        this.velocidad  += 30;
    }
    
    frenar(){
        this.velocidad = 0;
    }
}

let coche1 = new Coche("Coche1", "Marca1");
let coche2 = new Coche("Coche2", "Marca2");

console.log(coche1);
console.log(coche2);

coche1.acelerar();
console.log(coche1.velocidad);