"use strict";
let Pais = {
    capital: "Portugal",
    idioma: "PT",
    CEE: true,
    getCapital() {
        return this.capital;
    }
};
// AutoDefinicion
let portugal = {
    capital: "Lisboa",
    idioma: "PT",
    CEE: true,
    getCapital() {
        return this.capital;
    }
};
console.log(Pais.getCapital());
console.log(portugal.getCapital());
// Deteccion de tipos con typeOf.
let varios;
varios = "Esto es string";
console.log(typeof varios);
varios = 33;
console.log(typeof varios);
varios = true;
console.log(typeof varios);
// Deconstruccion de objetos en sus partes
let listaCoches = {
    c1: "ford",
    c2: "renault",
    c3: "seat"
};
// let { c1, c2, c3 } = listaCoches;
// console.log(c3);
let { c1, c2: familiar, c3 } = listaCoches;
console.log(familiar);
// let { c1, c2: familiar, c3, c4 = "Citroen" } = listaCoches;
// console.log(c4);
// También podemos desmontar arrays
let frutas = ["melon", "sandia", "aguacate", "platano"];
let [fg, fr, fa, pl] = frutas;
console.log(fa);
let [, sfr, , spl] = frutas;
console.log(sfr);
//# sourceMappingURL=app2.js.map