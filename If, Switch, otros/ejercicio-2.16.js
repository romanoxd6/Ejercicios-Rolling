/* Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:

Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1 */

const texto = prompt("Ingrese un texto:");

const vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

let posicion = -1;

for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
        posicion = i;
        break;
    }
}
if (posicion !== -1) {
    console.log(`La vocal '${texto[posicion]}' está en la posición ${posicion}.`);
} else {
    console.log("No se encontró ninguna vocal en el texto.");
}
