/*  
Uso de los OBJETOS en JS
*/

import { estudiantes, numeros, ventas } from "./db/db";
import { extraerInfoEstudiantes, totalVentas } from "./helpers/functions";

console.log("El total de las ventas es:",
totalVentas(ventas));

//! DESTRUCTURING DE OBJETOS
const estudiante = {
    nombre: "Juan",
    edad: 20,
    direccion: {
        calle: "Calle Falsa",
        numero: 123,
        ciudad: "Madrid",
    },
}

const {nombre, direccion:{calle,ciudad}} = estudiante;


const usuarios =[
    {id : 1, nombre: "Juan", rol: "admin"},
    {id: 2, nombre: "Ana", rol: "user"},
    {id: 3, nombre: "Luis", rol: "user"}
];

const [,{nombre:nombreSegundo}, {rol:rolTercero}] = usuarios;

//Crear una funcion que me devuelva el nombre y la ciudad de un array de objetos de estudiantes

console.log(extraerInfoEstudiantes(estudiantes));

//!Ejercicios

//1º Recorrer y mostrar: Usa forEach() para mostrar cada numero en consola
numeros.forEach(numero => console.log(numero));