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
/*
function cuadrado(array = []){
    return array.map((element) => element * element);
}
*/
const cuadradoAF = (array=[]) => array.map((element) => element * element);

console.log(`El cuadrado del array; ${numeros} = ${cuadradoAF(numeros)}`);
