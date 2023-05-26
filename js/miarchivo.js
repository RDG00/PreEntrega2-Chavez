

function validarEdad(){
    alert("¡Bienvenido/a a CompraTuTicket.com!");
    let EdadUser = parseInt(prompt("Antes de continuar, porfavor indicanos tu edad"));
    if (EdadUser >= 18){
        alert("Perfecto, podés continuar con la compra");
        }else {
        alert("Lo sentimos, no podés continuar con la compra por ser menor de edad");
        validarEdad();
        };
};

// QUISE HACER ESTO APLICANDO AARAY DE OBJETO Y METODOS DE BUSQUEDA PARA CHECAR LAS CANTIDADES DE ENTRADAS DISPONIBLES, PERO NO ME MUESTRA EN CONSOLA, TAMBIEN BUSQUE ALGUNA MANERA DE COLOCARLO MEDIANTE ALERTAS O PROMPTS PERO NO PUDE HACER PARA QUE EL USUARIO ESCOGIERA EL RECITAL. LAS PRUEBAS QUE HICE ESTAN COMENTADOS -SERIA BUENO LO VEA Y ASI ME GUIA MEJOR SOBRE COMO HACER ESO -
let entradas = [
    { recital: "Alejandro Fernandez", costo: 10000 },
    { recital: "Ha-Ash", costo: 9000 },
    { recital: "Metallica", costo: 11000 },
    { recital: "Fito Paez", costo: 11000 },
];

let encuentraRecital = entradas.find(function(entradas){
    return entradas.recital === "Ha-Ash"
});


/*PRUEBA:

function validarEdad(){
    alert("¡Bienvenido/a a CompraTuTicket.com!");
    let EdadUser = parseInt(prompt("Antes de continuar, porfavor indicanos tu edad"));
    if (EdadUser >= 18){
        alert("Perfecto, podés continuar con la compra");
        }else {
        alert("Lo sentimos, no podés continuar con la compra por ser menor de edad");
        validarEdad();
        };
};


function recital() {

const recital = [
    {nombre:"METALLICA", orden:a},
    {nombre:"FITO PAEZ", orden:b},
]

    let recital1 = recital.find(e => e.orden == a)
    let recital2 = recital.find(e => e.orden == b)

    let recitales = prompt("escoge a o b");
    if (recitales === b){
        alert("Perfecto, podés continuar con la compra");
        validarEdad();
        }else {
        alert("Lo sentimos, no podés continuar con la compra por ser menor de edad");
        recital();
        }; 

}

recital()
*/


let EntradasTotales = 150
let EntradasReservadas = 0

for (let i = 0; i < EntradasTotales; i++){
    validarEdad();
    let NombreCompra = prompt("¿Nos indicas tu nombre?").toLowerCase();
    let CantidadReservada = parseInt(prompt("Perfecto. " + NombreCompra + " Cuántos tickets deseas comprar?"));
    let CorreoElectronico = prompt("Ingresá tu correo electrónico");
    EntradasReservadas += CantidadReservada
    if (EntradasReservadas <= EntradasTotales){
       alert(NombreCompra + " , ya tenés tus entradas reservadas para " + CantidadReservada + " personas.");
    }else{
        /* nota: este alert fue creado con la finalidad de que me arroje el resultado de las entradas disponibles, pero justo cuando continua de vuelta con el inicio del codigo, tambien me resta el valor q se introdujo anteriormente (CantidadReservada) me gustaria saber como resolverlo */
        alert("Lo sentimos " + NombreCompra + " para evento quedan una cantidad de " + (CantidadReservada - (EntradasReservadas - EntradasTotales)) + " entradas, y tu petición excede el número permitido, hacé tu solicitud de vuelta");
        continue;
    }; 

    alert("¡Muchas gracias " + NombreCompra + " por comprar " + CantidadReservada + " tickets!. Porfavor confirme la compra y realice el pago mediante el link enviado a " + CorreoElectronico + " , ¡Hasta pronto!");
  };