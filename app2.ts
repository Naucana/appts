let Pais: { capital: string, idioma: string, CEE: boolean, getCapital: () => string } = {
    capital: "Portugal",
    idioma: "PT",
    CEE: true,
    getCapital() {
        return this.capital;
    }
}

type Paises = {
    capital: string,
    idioma: string,
    CEE: boolean,
    getCapital: () => string;
}

let portugal: Paises = {
    capital: "Portugal",
    idioma: "PT",
    CEE: true,
    getCapital() {
        return this.capital;
    }
}



// Deteccion de tipos con typeOf. Dconstruccion App2
let varios: string | number | boolean;

varios = "Esto es string";
console.log(typeof varios);

varios = 33;
console.log(typeof varios);

varios = true;
console.log(typeof varios);


// Destructuracion de objetos

// Desmontamos objetos en sus partes
let listaCoches = {
    c1: "ford",
    c2: "renault",
    c3: "seat"
}

// let {c1,c2,c3} = listaCoches;
// console.log(c3);

let { c1, c2: familiar, c3 } = listaCoches;
console.log(familiar);

// let { c1, c2: familiar, c3, c4 = "Citroen" } = listaCoches;
// console.log(c4);


// También podemos desmontar arrays
let frutas: string[] = ["melon", "sandia", "aguacate", "platano"];
let [fg, fr, fa, pl] = frutas;

console.log(fr);

let [, sfr, , spl] = frutas;
console.log(sfr);
