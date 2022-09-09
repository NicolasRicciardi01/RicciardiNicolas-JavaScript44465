/* let numero1 = (prompt("Su número es par o impar? Ingrese su número o ingrese ESC para terminar el programa"));

while(numero1 != "ESC"){

    if(numero1 %2 === 0){
        alert("Tu numero es par");
    }
    else{
        alert("Tu numero es impar");
    };

    numero1 = (prompt("Ingrese su numero o ingrese ESC para terminar el programa"));
}; */


class Producto{
    constructor(nombre, imagen, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.vendido = false;
        this.cantidad = cantidad;
    }

    vender(){
        if(this.cantidad === 0 ){
            this.vendido = false;
        }
        else{
            this.cantidad = this.cantidad - 1;
        }
    }
    }

    const producto1 = new Producto("monitor", "htt", 1234, 5);
    console.log(producto1);

    producto1.vender();
    console.log(producto1);
