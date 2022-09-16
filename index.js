/* Funcion para calcular los dolares */
function dolar(numero, tipo){
    switch(tipo){
        case "oficial":
            return numero * 139;
        case "blue":
            return numero * 270;
        case "liqui":
            return numero * 280;
        default :
        console.log("Tipo de dolar no identificado");
        break;
    }
}

let tipoDolar = (prompt("Ingrese el tipo de dolar al que quiere cambiar sus pesos: oficial, blue o liqui (Ingrese ESC para salir del programa)"));
let pesos = (prompt("Ingrese, sin el simbolo $, la cantidad de pesos a cambiar"));

while(tipoDolar != "ESC"){
    alert(`$${pesos} son $${dolar(pesos, tipoDolar)} USD al cambio ${tipoDolar}`);
    tipoDolar = prompt("Ingrese el tipo de dolar al que quiere cambiar sus pesos: oficial, blue o liqui (Ingrese ESC para salir del programa)");
    pesos = prompt("Ingrese, sin el simbolo $, la cantidad de pesos a cambiar");
};