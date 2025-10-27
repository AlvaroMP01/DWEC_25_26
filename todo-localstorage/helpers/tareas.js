import { uid } from "uid";
import tareas from "../db/db";

//!Comprobar si existe la clave "tareas" en localStorage. 
export const testTareas = () =>
    !localStorage.hasOwnProperty("Tareas") 
        ? localStorage.setItem("Tareas", JSON.stringify(tareas)) 
        : true;

    //if (localStorage.hasOwnProperty("tareas")) return
    //localStorage.setItem("tareas", JSON.stringify(tareas))

//! getTareas: obtener las tareas almacenadas en localStorage o devolver un array vacio si no hay ninguna tarea.
export const getTareas = () =>{
    try {
        const data = localStorage.getItem("Tareas")
        if (!data) return []

        const parsed = JSON.parse(data)
        return Array.isArray(parsed) ?  parsed : []
    } catch (error) {
        return []
    }
};


//! saveTareas: guarda el array de tareas en localStorage como JSON
export const saveTareas = (arrayTareas) =>
    localStorage.setItem("Tareas", JSON.stringify(arrayTareas));

//!addTarea: crea una nueva tarea con el nombre recibido y la añade al almacenamiento.
export const addTareas = (nombreTarea) => {
    if (!nombreTarea){
        throw new Error("El nombre de la tarea no puede estar vacio");
    }
    //Hay que buscar si el nombre de la tarea ya existe
    const misTareas = getTareas(); //Array con mis tareas
    if (!misTareas.find((tarea) => tarea.nombre === nombreTarea)){
        //Si es falsy, añadimos la tarea a mis tareas y despues al localStorage
        const tareaAInsertar = {
            id: uid(),
            nombre: nombreTarea,
            fechaCreacion:"2025-10-07T12:00:00Z",
            completada: false,
        };
        misTareas.push(tareaAInsertar);
        saveTareas(misTareas);
    }
};