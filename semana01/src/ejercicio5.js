//? Unir dos arrays que pasamos como parámetros y devolver un nuevo array
/*
function unirArrays(array1=[], array2=[]) {
    array1.concat(array2);
    return array1;
}
*/

//! spreed operator ...
/*
function unirArrays(array1=[], array2=[]) {
    return [...array1, ...array2];
}
*/
const unirArraysAF= (array1=[], array2=[]) => [...array1, ...array2];


//? Arrays de numeros y quiero calcular el cuadrado de los números
const numeros = [1,2,3,4,5];

/**
* @param {number[]} - array de números
* @returns {number[]} - array de números al cuadrado
* @example
* cuadrado([1,2,3,4,5]) // [1,4,9,16,25]
*/


function cuadrado(array = []){
    return array.map((element) => element * element);
}

const cuadradoAF = (array=[]) => array.map((element) => element * element);

console.log(`El cuadrado del array usando Arrow Function es: ${numeros} = ${cuadradoAF(numeros)}`);
console.log(`El cuadrado del array es: ${numeros} = ${cuadrado(numeros)}`);

//? 1º Crear tres funciones que les pases un array de numeros y me diga tres cosas: el maximo, el minimo y un array con los numeros que son primos
const numeros = [10,20,15,12,21,68]

function maximo(array = []) {
    return Math.max(...array);
}

