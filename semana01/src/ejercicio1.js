// Comentario de una linea

/* 
Comentario de carias lineas
*/

/*
Ejercicio1: Crear una función que le pase como parametros 2 numeros
y retorne la suma.
* @param {number} num1
* @param {number} num2
* @return {number} suma de num1 y num2
*/

function sumaDosNumeros(num1=0,num2=0){
    return num1+num2;
}

console.log("Suma de dos numeros -->");
console.log("Primera suma:",sumaDosNumeros(2,3));
console.log(sumaDosNumeros());