import { addTareas, getTareas, saveTareas, testTareas } from "../helpers/tareas";

// Al iniciar  la aplicación debemos comprobar si hay tareas almacenadas en localStorage.
//Si no estan guardadas, las 
testTareas();
console.log("getTareas:", getTareas());


