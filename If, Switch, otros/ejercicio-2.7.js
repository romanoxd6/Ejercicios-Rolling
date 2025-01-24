/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
…… */

let num = parseFloat(prompt("Ingrese un numero menor o igual a 50"));

if(num <= 50){
    for(let i = 1; i <= num; i++){
        let row = ""
        for(let j = 1; j <= i; j++)
            row += j;
        console.log(row)
    }
} else if (num > 50){
    console.log("Ingrese un numero menor a 50")
} else {
    console.log("Ingrese un dato valido")
}
