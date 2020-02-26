"use strict";
function correcto() {
    console.log("Todo correcto!");
}
function incorrecto() {
    console.log("Todo Maaaaal!");
}
console.log("Antes de la definicion");
let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let numero = Math.round(Math.random() * 1000);
        let par = (numero % 2) == 0;
        if (par) {
            console.log("el numero es par");
            resolve();
        }
        else {
            console.log("el numero es impar");
            reject();
        }
    }, 1500);
});
console.log("Despues de la definicion");
promesa.then(correcto, incorrecto);
console.log("Acabando el programa");
//# sourceMappingURL=app8.js.map