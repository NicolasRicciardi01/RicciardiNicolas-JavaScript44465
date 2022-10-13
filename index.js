// Lista de divisas a usar con su respectivo precio
const divisas = `[
    {
        "nombre": "ARS",
        "precio": 0.0071
    },
    {
        "nombre": "USDoficial",
        "precio": 1
    },
    {
        "nombre": "USDblue",
        "precio": 1.94
    },
    {
        "nombre": "USDliqui",
        "precio": 2.01
    }
]`

// Lista de devisas como variable
const jsonDivisas = JSON.parse(divisas);

// Variables
const tipoMoneda1 = document.getElementById("moneda1");
const cantidadMoneda1 = document.getElementById("cantidad1");
const tipoMoneda2 = document.getElementById("moneda2");
const cantidadMoneda2 = document.getElementById("cantidad2");

// Variables boton
const rateEl = document.getElementById("rate");
const cambio = document.getElementById("cambio");

// Event listeners de imputs del usuario
tipoMoneda1.addEventListener("change", calcular);
tipoMoneda2.addEventListener("change", calcular);
cantidadMoneda1.addEventListener("input", calcular);
cantidadMoneda2.addEventListener("input", calcular);

// Calculadora
function calcular(){
    let moneda_1 = jsonDivisas.find(elemento => {return elemento.nombre === tipoMoneda1.value});
    let moneda_2 = jsonDivisas.find(elemento => {return elemento.nombre === tipoMoneda2.value});

    rateEl.innerText = `1 ${moneda_1.nombre} = ${moneda_2.precio} ${moneda_2.nombre}`;  

    if (moneda_1.nombre === "ARS" && moneda_2.nombre === "USDoficial"){
        cantidadMoneda2.value = (cantidadMoneda1.value / 139).toFixed(2);
    } else {
        cantidadMoneda2.value = (cantidadMoneda1.value * moneda_2.precio).toFixed(2);
    }
}

// Boton de intercambio 
cambio.addEventListener("click", () =>{
    let temp = tipoMoneda1.value;
    tipoMoneda1.value = tipoMoneda2.value;
    tipoMoneda2.value = temp;
    calcular();

    // Alerta
    Swal.fire({
        title: 'Hecho!',
        text: 'Monedas intercambiadas',
        icon: 'success',
        confirmButtonText: 'Ok'
    });
})