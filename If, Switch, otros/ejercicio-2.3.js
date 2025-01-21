/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -. */

let result = "";
let input;

while (true) {
    let proceed = confirm("¿Quiere introducir una cadena de texto?");

    if(!proceed){
        break;
    }

    input = prompt("Por favor, introduce una cadena de texto:");

    if(result === ""){
        result = input;
    } else{
        result += " - " + input;
    }
}
alert(`Las cadenas concatenadas son: ${result}`);
