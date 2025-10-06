/*  
Uso de los OBJETOS en JS
*/

import { ventas } from "./db/db";
import { totalVentas } from "./helpers/functions";

console.log("El total de las ventas es:",
totalVentas(ventas));

//Destructuring de objetos
const colores = ["Rojo", "Verde", "Azul"];

const [a, ...b]= colores;