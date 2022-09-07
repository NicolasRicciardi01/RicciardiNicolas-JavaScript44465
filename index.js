let numero1 = (prompt("Ingrese su numero"));

while(numero1 != "ESC"){

    if(numero1 %2 === 0){
        alert("Tu numero es par");
    }
    else{
        alert("Tu numero es impar");
    };

    numero1 = (prompt("Ingrese su numero"));
};