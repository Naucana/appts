let coche1 = {
    marca: "Ford",
    puertas: 4,
    color: "Blanco"
}
let coche2 = {
    marca: "Renault",
    puertas: 4,
    color: "Negro"
}
let coche3 = {
    marca: "Seat",
    puertas: 4,
    color: "Verde"
}

let flota = [coche1, coche2, coche3];

for (let i in flota) {
    let coche = flota[i];
    console.log(coche.marca, coche.puertas, coche.color);
}
console.log('***************************************');
for (let i = 0; i < flota.length; i++) {
    let coche = flota[i];
    console.log(coche.marca, coche.puertas, coche.color);
}
console.log('***************************************');
for (let coche of flota) {
    console.log(coche.marca, coche.puertas, coche.color);
}
console.log('***************************************');
flota.forEach(coche => {
    console.log(coche.marca, coche.puertas, coche.color);
});


let variable: any = "Pruebas";
let numero: number = (<string>variable).length;
console.log(numero);