// Creacion de clase con metodo estatico que pueda recibir un parametro o no
class Saludo {
    static creaSaludo(nombre?: string): string {
        if (nombre) {
            return `Hola ${nombre}`;
        } else {
            return `No hablo con desconocidos`;
        }
    }
}

console.log(Saludo.creaSaludo());
console.log(Saludo.creaSaludo("Gustavo Adolfo"));
