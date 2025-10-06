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

//? 1º Crear tres funciones que les pases un array de numeros y me diga tres cosas: el maximo, el minimo y un array con los numeros que son pares
/*
const par = (arrayNumeros=[]) => {
    const pares = [];
    arrayNumeros.map((numero)=> {
        if (numero >= 1) {
            if (numero%2 === 0) pares.push(numero);
        }
    })
    return pares;
}
*/
const pares = (arrayNumeros=[]) => arrayNumeros.filter(numero => numero%2 === 0);
Math.max(arrayNumeros);
Math.min(arrayNumeros);

//? 2º Un array de nombres y devolver los nombres con más de 5 caracteres

const nombresLongitud2 = (arrayNombres=[], longitud) => arrayNombres
    .filter(nombre => nombre.length >= longitud);

//? 3º Un array de nombres y devolver los nombres con la primera letra en mayúscula

const letraCapital = (arrayNombres=[]) => arrayNombres
.filter(nombre => nombre.charAt(0) === nombre.charAt(0).toUpperCase());

//? 3.2º Un array de nombres y devolver los nombres con la primera letra en mayúscula

const letraCapitalAF = (arrayNombres = []) => arrayNombres
.map((nombre) => nombre.charAt[0].toUpperCase() + nombre.slice(1).toLowercase());

//? 4º Dado un objeto formado por {nombre: password: }

const usuarios = [{
    username: "Antonio",
    password: "12345"
},
{
    username: "root",
    password: "Alumnado2025"
},
{
    username: "",
    password: ""
},
{
    username: "Sara",
    password: "Alumnado2025"
}
]


//? 1º verificar que el nombre y la contraseña no sean vacios
const verificarVacios = (arrayUsuarios=[]) => {

    return arrayUsuarios.map((usuario)=>{
        return usuario.username==="" && usuario.password==="" ? "Credenciales vacias" : "Credenciales correctas";
    })
}

const verificarVacios2 = (arrayUsuarios=[]) => arrayUsuarios
    .map((usuario)=> usuario
    .username==="" && usuario.password==="" ? "Credenciales vacias" : "Credenciales correctas");


//? 2º que la longitud de la contraseñas sea de mas de 8 caracteres
const longitudPassword = (arrayUsuarios=[])=>{
    return arrayUsuarios.filter((usuario)=>{
        return usuario.password.length>=8
    })
}

//? 3º que los datos sean el usuario root y la contraseña sea Alumnado2025
const longitudPassword2 = (arrayUsuarios=[]) => arrayUsuarios
.filter((usuario)=> usuario.password.length>=8
.filter((usuario)=> usuario.password==="Alumnado2025")
.filter((usuario)=> usuario.username==="root")
)