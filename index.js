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
function calcular() {
    const moneda_1 = tipoMoneda1.value;
    const moneda_2 = tipoMoneda2.value;
    fetch(`https://v6.exchangerate-api.com/v6/b71ba5a6f69833fe3ac900ec/latest/${moneda_1}`)
        .then((res) => res.json())
        .then((data) => {
        const rate = data.conversion_rates[moneda_2];
        rateEl.innerText = `1 ${moneda_1} = ${rate} ${moneda_2}`;
        cantidadMoneda2.value = (cantidadMoneda1.value * rate).toFixed(2);
    });
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