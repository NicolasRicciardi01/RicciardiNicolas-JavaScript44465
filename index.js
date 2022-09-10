/* Funcion para calcular los dolares */
function dolar(numero, tipo){
    switch(tipo){
        case "oficial":
            return numero * 139;
            break;
        case "blue":
            return numero * 270;
            break;
        case "liqui":
            return numero * 280;
            break;
        default :
        console.log("Tipo de dolar no identificado");
        break;
    }
}

let resultado = dolar();
let tipoDolar = (prompt("Ingrese el tipo de dolar al que quiere cambiar sus pesos: oficial, blue o liqui (Ingrese ESC para salir del programa)"));
let pesos = (prompt("Ingrese, sin el simbolo $, la cantidad de pesos a cambiar"));
let mensaje = (`$${pesos} son $${dolar(pesos, tipoDolar)} USD al cambio ${tipoDolar}`);

while(tipoDolar != "ESC"){
    alert(mensaje);
    tipoDolar = prompt("Ingrese el tipo de dolar al que quiere cambiar sus pesos: oficial, blue o liqui (Ingrese ESC para salir del programa)");
    pesos = prompt("Ingrese, sin el simbolo $, la cantidad de pesos a cambiar");
    mensaje = (`$${pesos} son $${dolar(pesos, tipoDolar)} USD al cambio ${tipoDolar}`);
};