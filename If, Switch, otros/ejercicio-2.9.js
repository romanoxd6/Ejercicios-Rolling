/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1. */

const filas = Number(prompt("Introduzca el numero de filas"));
const columnas = Number(prompt("Introduzca el numero de columnas"));

let totalCeldas = filas * columnas;
let tabla = "";

for(let i = 0; i < filas; i++){
    for(let j = 0; j < columnas; j++){
        tabla += totalCeldas-- + "\t";
    }

    tabla += "\n"
}

console.log(tabla)