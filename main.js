
alert ("bienvenidos al simulador de prestamos");

let cantidadDeCuotas = prompt( "Temporalmente solo contamos con la modalidad de 3 cuotas disculpe! ingrese la cantidad de cuotas:");

/* CICLO */

while(cantidadDeCuotas != "3"){
    console.log (cantidadDeCuotas);
    cantidadDeCuotas = prompt("Temporalmente solo contamos con la modalidad de 3 cuotas disculpe! ingrese la cantidad de cuotas:");
}

let cuotas = parseInt(3)

/* molde de objetos para las cuotas */

class Cuotas {
    constructor(cantCuotas, prestamo){
        this.cantCuotas = cantCuotas;
        this.prestamo = prestamo;
    }
        intereses(){
            return this.prestamo / 2 * 1.5;
        }
}

/* objetos/cuotas creadas */

const tres = new Cuotas (3, 5000);

const seis = new Cuotas (6, 10000);

const doce = new Cuotas (12, 15000);


/* intento de array */

const limiteCuotas = ["tres", "seis", "doce"];



console.log("usted a seleccionado " + tres.cantCuotas + " cuotas lo que le permitira percibir el monto de " + tres.prestamo + " y con los intereses usted estara abonando de manera mensual la suma de " + tres.intereses());

console.log("proximas cantidades disponibles " + limiteCuotas + " cuotas sin interes");


/*inicialmente queria hacer funcional los objetos junto con la toma de datos del prompt pero no me salio, asi que decidi dejarlo asi, por lo cual si bien es funcional, no es totalmente funcional como me gustaria, disculpe, cualquier consejo sera bien recibido!*/