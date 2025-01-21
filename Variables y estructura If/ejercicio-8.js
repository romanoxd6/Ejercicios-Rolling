/* Escribe un programa que pida un número y diga si es divisible por 2
 */

let num1 = parseInt(prompt(`Ingrese un numero`))

if (num1 % 2 == 0) {
    document.write(`El ${num1} es divisible por 2`)
} else {
    document.write(`El ${num1} no es divisible por 2`)
}
