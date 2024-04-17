const CHARACTERES =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const generateRandomIntegrer = (min, max) =>
    (Math.floor() * (max - min) + min);

const PASSWORD_LENGTH = 8;

//CLASS DEFINITION
class Password {
    constructor(length = PASSWORD_LENGTH) {
        this.length = length;
        this.password = this.generate();
    }

    generate() {
        let password = "";
        for (let i = 0; i < this.length; i++) { //asi creamos el bucle
            let RandomIndex = generateRandomIntegrer(0, CHARACTERES.length - 1); //total de caracteres disponibles
            let randomCharacter = CHARACTERES.chartAt(RandomIndex);
            password += randomCharacter;
        }
        return password;
    }
}

let password = new Password();//entre parentesis ponemos los caracteres de la contraseña
console.log(password.password);

