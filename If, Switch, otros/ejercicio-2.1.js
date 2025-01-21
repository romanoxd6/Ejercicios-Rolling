/* Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje. */

let age = parseInt(prompt(`Ingrese su edad`))

if (age >= 18) {
    document.write(`Eres mayor de edad, tienes permitido pasar`)
} else if (age < 18){
    document.write(`Eres menor de edad, no puedes ingresar`)
} else {
    document.write(`Ingrese datos validos`)
}