const nombres = ["oficial", "blue", "liqui"];
const precios = [139, 270, 280];

function tdolar(nombre, precio){
    this.nombre = nombre
    this.precio = precio
};

const oficial = new tdolar(nombres[0], precios[0]);
const blue = new tdolar(nombres[1], precios[1]);
const liqui = new tdolar(nombres[2], precios[2]);

/* Funcion para calcular los dolares */
function dolar(numero, tipoDolar){
    switch(tipoDolar){
        case oficial.nombre:
            return numero * oficial.precio;
        case blue.nombre:
            return numero * blue.precio;
        case liqui.nombre:
            return numero * liqui.precio;
        default :
        console.log("Tipo de dolar no identificado");
        break;
    };
};

let tipoDolar = prompt(`Ingrese el tipo de dolar al que quiere cambiar sus pesos: ${nombres.join(" - ")} (Ingrese ESC para salir del programa)`);
let pesos = prompt("Ingrese, sin el simbolo $, la cantidad de dolares a cambiar");

while(tipoDolar != "ESC"){
    alert(`$${pesos} USD son $${dolar(pesos, tipoDolar)} ARS al cambio ${tipoDolar}`);
    tipoDolar = prompt(`Ingrese el tipo de dolar al que quiere cambiar sus pesos: ${nombres.join(" - ")} (Ingrese ESC para salir del programa)`);
    pesos = prompt("Ingrese, sin el simbolo $, la cantidad de dolares a cambiar");
};