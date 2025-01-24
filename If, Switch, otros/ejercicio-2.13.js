/* 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”. */

let texto = prompt("Introduzca una cadena de texto");

let textoConGuion = "";

for(let i = 0; i < texto.length; i++){
    textoConGuion += texto[i]

    if(i < texto.length - 1){
        textoConGuion += "-";
    }
}

console.log(textoConGuion)