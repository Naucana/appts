interface Movimiento {
    (velocidadInicio: number, aceleracion: number): number;
}

let calVelocidad: Movimiento = function (vIni: number, acc: number) {
    return vIni + acc;
}

console.log("La Velocidad del coche de la interfaz es: " + calVelocidad(90,30));