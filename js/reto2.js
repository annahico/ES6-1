const CHARACTERES =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const generateRandomIntegrer = (min, max) =>
    (Math.floor() * (max - min) + min);

const PASSWORD_LENGTH = 8;

//class definition
class Password {
    constructor(length = PASSWORD_LENGTH) {
        this.length = length;
        this.password = this.generate();
    }

    generate() {
        let password = ""; //no se pone nada entre "" porque no hay una contraseña
        for (let i = 0; i < this.length; i++) { //asi creamos el bucle para las dos linias de debajo
            let RandomIndex = generateRandomIntegrer(0, CHARACTERES.length - 1); //total de caracteres disponibles
            let randomCharacter = CHARACTERES.chartAt(RandomIndex);
            password += randomCharacter; //aqui se acumula
        }
        return password; //devlvemos la contraseña
    }
}

let password = new Password();//entre parentesis ponemos los caracteres de la contraseña que queremos que genere
console.log(password.password);

