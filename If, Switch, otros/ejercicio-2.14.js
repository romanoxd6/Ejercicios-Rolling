/* Realiza un script que cuente el número de vocales que tiene un texto. */
let texto = String(prompt("Introduzca un texto"));
let contadorVocales = 0;
const vocales = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]

for (let i = 0; i < texto.length; i++) {
    // Comprobar si el carácter actual es una vocal
    if (vocales.includes(texto[i])) {
        contadorVocales++;
    }
}

console.log(`El numero de vocales en el teto es: ${contadorVocales}}`)