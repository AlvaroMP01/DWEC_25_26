
// Formas de crear un array
const frutas = ["Manzana", "Platano", "Cereza"];
const dato = [];
const nombre = new Array();
const edades = new Array(10, 5, 7, 2);
frutas[0];
edades[2];

//! Metodos importatentes: push() añade un elemento al final del array / pop() elimina el ultimo elemento del array
edades;
edades.push(15);
edades;

edades.pop();
edades;


//! unshift() añade un elemento al inicio del array / shift() elimina el primer elemento del array
edades.unshift(20);
edades;

edades.shift();
edades;

//! slice() devuelve una copia del array a partir de la posición del indice que le pasemos entre paréntesis
edades.slice(1);
edades;
edades.slice(1, 3); //Inicio lo coge, pero la posicion final indicada no la coge
edades;

//! Splice()

//! map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos
const edadesDoble = edades.map( (edad)=> edad*2 )
edades;
edadesDoble;


//! 1º Crear una funcion que le pase como parametro un array de nombres y me devuelva un array con todos los nombres en mayusculas.
    // const nombresMayusuculas = (arrayNombres) => arrayNombres.map((nombre) => nombre.toUpperCase);

function nombresMayusuculas(arrayNombres){
    return arrayNombres.map((nombre)=>nombre.toUpperCase());
}

//! 2º Crear una funcion que le pase como parametro un array de numeros y me devuelva un array con las raices cuadradas de esos numeros.

function raicesCuadradas(arrayNumeros) {
    return arrayNumeros.map((num) => Math.sqrt(num));
}

//! 3º Crear una funcion que le pase como parametro un array de numeros y me devuelva un array con los numeros primos.

function esPrimo(num) {
    if (num < 2) return false; // Los menores de 2 no son primos
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false; // Si se puede dividir, no es primo
    }
    return true;
}

function numerosPrimos(arrayNumeros) {
    return arrayNumeros.filter((num) => esPrimo(num));
}
