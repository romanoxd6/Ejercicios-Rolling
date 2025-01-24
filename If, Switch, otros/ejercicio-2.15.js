/* Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”. */

const texto = String(prompt("Introduzca un texto"));

const textoInvertido = texto.split("").reverse().join("");

console.log(textoInvertido)