/* Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() */

const nombre1 = prompt("Introduzca el primer nombre");
const edad1 = parseInt(prompt("Introduzca la primera edad "))

const nombre2 = prompt("Introduzca el segundo nombre");
const edad2 = parseInt(prompt("Introduzca la segunda edad "))

const nombre3 = prompt("Introduzca el tercer nombre");
const edad3 = parseInt(prompt("Introduzca la tercera edad "))

let mayorEdad = Math.max(edad1, edad2, edad3);

let nombreMayor;

if(mayorEdad === edad1){
    nombreMayor = nombre1

} else if(mayorEdad === edad2){
    nombreMayor = nombre2

} else{
    nombreMayor = nombre3;
}

console.log(`La persona con mayor edad es ${nombreMayor} con ${mayorEdad}`)

