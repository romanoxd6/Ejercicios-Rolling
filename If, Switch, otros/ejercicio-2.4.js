/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

let sum = 0;

while(true){
    let input = parseInt(prompt("Introduce un numero"))

    if(input == null){
        break;
    }

    if(isNaN(input)){
        alert ("Por favor, introduce un numero valido")
        alert(`La suma total de los numero introducidos es: ${sum}`);
    } else{
        sum += Number(input);
        alert(`El numero elegido es: ${input}`)
    }

}

