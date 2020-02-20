"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Apocalipsis {
    constructor(nombre) {
        this.nombre = nombre;
    }
    static getInstance() {
        if (!Apocalipsis.instancia)
            Apocalipsis.instancia = new Apocalipsis("The End!");
        return Apocalipsis.instancia;
    }
}
exports.Apocalipsis = Apocalipsis;
//# sourceMappingURL=apocalipsis.js.map