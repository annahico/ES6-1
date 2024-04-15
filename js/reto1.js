const NOMBRE_DEFECTO = "Anna";
const EDAD_DEFECTO = 31;
const SEXO_DEFECTO = "M";
const PESO_DEFECTO = 55;
const ALTURA_DEFECTO = 172;

class Persona {
    constructor(
        dni,
        nombre = NOMBRE_DEFECTO,
        edad = EDAD_DEFECTO,
        sexo = SEXO_DEFECTO,
        peso = PESO_DEFECTO,
        altura = ALTURA_DEFECTO
    ) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}
const persona = new Persona("48848362L");
const persona2 = new Persona("1234567H", "Maria");
const persona3 = new Persona("9876548F", "Peter", 55);

console.log(persona);
console.log(persona2);
console.log(persona3);