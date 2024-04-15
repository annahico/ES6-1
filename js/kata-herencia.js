class Rectangulo {
    constructor(altura, anchura) {
        this.nombre = "Rectangulo";
        this.altura = altura;
        this.ancho = ancho;
    }

    decirNombre() {
        console.log("Hola soy un ${this.nombre}");
    }

    area() {
        return this.altura * this.ancho;
    }
}

class Cuadrado extends Rectangulo {
    constructor(lado) {
        super(lado, lado);
        this.nombre = "Cuadrado";
    }
}

let rectangulo = new Rectangulo(4, 3);
console.log(rectangulo.area());
rectangulo.decirNombre();

let cuadrado = new Cuadrado(5);
console.log(cuadrado.area());
cuadrado.decirNombre();