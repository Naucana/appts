"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hola Mundo");
var variable = "Pruebas";
var numero = variable.length;
console.log(numero);
var Persona = /** @class */ (function () {
    function Persona(nombre, rol, edad) {
        this.nombre = nombre;
        this.rol = rol;
        this._edad = edad;
        Persona.dni += 1;
    }
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (edad) {
            this._edad = edad;
        },
        enumerable: true,
        configurable: true
    });
    Persona.prototype.toString = function () {
        return "Datos de la persona: " + this.nombre + ", ROL:" + this.rol + ", EDAD:" + this.edad + ", DNI:" + Persona.dni;
    };
    Persona.dni = 0;
    return Persona;
}());
var Usuario = /** @class */ (function (_super) {
    __extends(Usuario, _super);
    function Usuario(idUsuario, nombre, rol, edad) {
        var _this = _super.call(this, nombre, rol, edad) || this;
        _this.idUsuario = idUsuario;
        return _this;
    }
    Usuario.prototype.toString = function () {
        return _super.prototype.toString.call(this) + "id: " + this.idUsuario;
    };
    Usuario.prototype.crearEdad = function (edad) {
        this.edad = edad;
    };
    return Usuario;
}(Persona));
var u1;
u1 = new Usuario(1, "Antonio", "Direccion", 40);
console.log(u1.toString());
var u2;
u2 = new Usuario(2, "Jose", "Direccion", 40);
console.log(u2.toString());
var u3;
u3 = new Usuario(3, "Verdiro", "Direccion", 40);
console.log(u3.toString());
var Figura = /** @class */ (function () {
    function Figura(ancho, alto) {
        this._ancho = 0;
        this._alto = 0;
        if (ancho) {
            this._ancho = ancho;
        }
        if (alto) {
            this._alto = alto;
        }
    }
    Object.defineProperty(Figura.prototype, "ancho", {
        get: function () {
            return this._ancho;
        },
        set: function (ancho) {
            this._ancho = ancho;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Figura.prototype, "alto", {
        get: function () {
            return this._alto;
        },
        set: function (alto) {
            this._alto = alto;
        },
        enumerable: true,
        configurable: true
    });
    return Figura;
}());
var fig = new Figura;
fig.ancho = 10;
fig.alto = 5;
console.log(fig.ancho + "x" + fig.alto);
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Apocalipsis.getInstance = function () {
        if (!Apocalipsis.instancia)
            Apocalipsis.instancia = new Apocalipsis("The End!");
        return Apocalipsis.instancia;
    };
    return Apocalipsis;
}());
var apc = Apocalipsis.getInstance();
console.log(apc.nombre);
