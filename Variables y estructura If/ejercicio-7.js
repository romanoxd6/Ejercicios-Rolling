/* Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres. */

let num1 = parseFloat(prompt(`Ingrese el primer numero`));
let num2 = parseFloat(prompt(`Ingrese el segundo numero`));
let num3 = parseFloat(prompt(`Ingrese el tercer numero`));

if (num1 > num2 && num1 > num3) {
    document.write(`${num1} es mayor que ${num2} y ${num3}`)
} else if (num2 > num1 && num2 > num3) {
    document.write(`${num2} es mayor que ${num1} y ${num3}`)
} else{
    document.write(`${num3} es mayor que ${num2} y ${num1}`)
}