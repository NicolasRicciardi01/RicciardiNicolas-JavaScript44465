const divisas = `[
    {
        "nombre": "ARS",
        "precio": 1
    },
    {
        "nombre": "USDoficial",
        "precio": 139
    },
    {
        "nombre": "USDblue",
        "precio": 270
    },
    {
        "nombre": "USDliqui",
        "precio": 280
    }
]`

const jsonDivisas = JSON.parse(divisas)

// Variables
const tipoMoneda1 = document.getElementById("moneda1");
const cantidadMoneda1 = document.getElementById("cantidad1");
const tipoMoneda2 = document.getElementById("moneda2");
const cantidadMoneda2 = document.getElementById("cantidad2");

const rateEl = document.getElementById("rate");
const cambio = document.getElementById("cambio");

// Calculadora
function calcular(){
    let moneda_1 = jsonDivisas.find(elemento => {return elemento.nombre === tipoMoneda1.value});
    let moneda_2 = jsonDivisas.find(elemento => {return elemento.nombre === tipoMoneda2.value});

    rateEl.innerText = `1 ${moneda_1.nombre} = ${moneda_2.precio} ${moneda_2.nombre}`;  

    if (moneda_1.nombre === "ARS"){
        cantidadMoneda2.value = (cantidadMoneda1.value / moneda_2.precio).toFixed(2);
    }  else {
        cantidadMoneda2.value = (cantidadMoneda1.value * moneda_1.precio).toFixed(2);
    }
};

// Event listeners de inputs del usuario
tipoMoneda1.addEventListener("change", calcular);
tipoMoneda2.addEventListener("change", calcular);
cantidadMoneda1.addEventListener("input", calcular);
cantidadMoneda2.addEventListener("input", calcular);