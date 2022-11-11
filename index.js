// Variables
const tipoMoneda1 = document.getElementById("moneda1");
const cantidadMoneda1 = document.getElementById("cantidad1");
const tipoMoneda2 = document.getElementById("moneda2");
const cantidadMoneda2 = document.getElementById("cantidad2");
const historial = document.getElementById("historialId");

// Variables boton
const rateEl = document.getElementById("rate");
const cambio = document.getElementById("cambio");

// Event listeners de imputs del usuario
tipoMoneda1.addEventListener("change", calcular);
tipoMoneda2.addEventListener("change", calcular);
cantidadMoneda1.addEventListener("input", calcular);
cantidadMoneda2.addEventListener("input", calcular);

// Historial
for(let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    let tag = document.createElement("p");
    let text = document.createTextNode(`${localStorage.getItem(clave)}`);
    tag.appendChild(text);
    historial.appendChild(tag);
}

// Calculadora
function calcular() {
    const moneda_1 = tipoMoneda1.value;
    const moneda_2 = tipoMoneda2.value;
    fetch(`https://v6.exchangerate-api.com/v6/06283b96790043ee5c5264d9/latest/${moneda_1}`)
        .then((res) => res.json())
        .then((data) => {
        const rate = data.conversion_rates[moneda_2];
        rateEl.innerText = `1 ${moneda_1} = ${rate} ${moneda_2}`;
        cantidadMoneda2.value = (cantidadMoneda1.value * rate).toFixed(2);
        let dia = new Date();
        localStorage.setItem(`${dia}`, `${moneda_1}: ${cantidadMoneda1.value} => ${moneda_2} ${cantidadMoneda2.value}`);
        let tag = document.createElement("p");
        let text = document.createTextNode(`${cantidadMoneda1.value} => ${moneda_2} ${cantidadMoneda2.value}`);
        tag.appendChild(text);
        historial.appendChild(tag);
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