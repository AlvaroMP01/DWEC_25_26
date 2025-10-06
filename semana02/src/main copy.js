/**
 * Uso de objetos en JavaScript
 * 
 */

import { usuario, ventas } from "./db/db";


//Metodo para recorrer las claves de un objeto -> Object.keys()
const claves = Object.keys(usuario);
//["nombre", "edad", "email", "activo"]

//Metodo para sacar los valores de un objeto -> Object.values()
const values = Object.values(usuario);
//["Juan", "30", "juanemail@gmail.com", true]

//!Calcular el total de venta de vehiculos en el 1er trimestre


const ventaElectricos = Object.values(ventas);
//ventaElectricos = [1000, 1500, 1200];

const total = ventaElectricos
  .reduce((suma, venta) => suma + venta , 0)

//Metodo que me devuelve de forma conjunta las keys y los values -> Object.entries();

const configuracion ={
  tema : "oscuro",
  idioma : "es", 
  notificaciones : true,
  volumen : 75
};

const entradas =Object.entries(configuracion);
/*
[
  ["tema", "oscuro"],
  ["idioma", "es"],
  ["notificaciones", true],
  ["volumen", 75]
]
 */

//Obtener un array que contenga [[nombre_producto, precioConIva], ...]
const precios = {
  laptop: 1000,
  mouse: 25,
  keyboard: 75
};

const preciosConIva = Object.entries(precios)
  .map(([producto, precio]) => [producto, precio*1,21])