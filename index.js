// Comentario de 1 linea

/* Comentario
    de
    varias 
    lineas   */

//declarando una variable
let edad;

//forma no recomendada
var nombre = "Nicolas"

//asignando valor a variable
edad = 23;

//declarando y asignando
let año = 44;

//constantes

const ALTURA = 140;

//usar camelCase

console.log(edad)

let numeroUno =45;
let numeroDos =30;
let suma = numeroUno + numeroDos;

console.log("suma", suma);

let saludo = "Hola";

console.log(saludo + " " + nombre);



/* let mensaje1 = `${saludo} ${nombre} hola hola`;
console.log(mensaje1);

let nombre2 = prompt("Ingresa tu nombre");

console.log(nombre2);
alert(nombre2);

let entrada = prompt("Ingresar una letra");
let salida = entrada + " " + "ingresada";
alert(salida); */


let numero1 = parseInt(prompt("Ingrese su numero"));

if(numero1 %2 === 0){
    alert("Tu numero es par");
}
else{
    alert("Tu numero es impar")
};