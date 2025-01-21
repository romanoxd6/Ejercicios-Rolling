let num1 = parseInt(prompt(`Ingrese un numero`))
let num2 = parseInt(prompt(`Ingrese otro numero`))

if (num1 > num2) {
    document.write(`${num1} es mayor a ${num2}`)
} else if (num1 < num2) {
    document.write(`${num2} es mayor a${num1}`)
} else{
    document.write(`Ingrese valores correctos`)
}