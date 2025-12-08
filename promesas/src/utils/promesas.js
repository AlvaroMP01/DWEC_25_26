
const PORT = import.meta.env.VITE_PORT || 4001;
const URL = import.meta.env.VITE_URL || 'http://localhost';

const URL_PORT = `${URL}:${PORT}`; //! http://localhost:4001

// Promesas en js con .then / .catch

export const fetchPromises = () => {
    console.log("-------------- Iniciando Promesas con .then() --------------")
    //Como se construye una promesa
    fetch(`${URL_PORT}/tareas`)
        .then(response => {
            if(!response.ok){
                throw new console.error("Error haciendo la peticion a la API");                
            }
            return response.json()
        })
        .then(data => {
            console.log("----- Recibiendo la data -----")
            data.forEach(tarea => {
                console.log(`Tarea: ${tarea.texto} ---> ${tarea.completada ? '✅Completada' : '❌Pendiente'}`);
            });
        })
        .catch( error =>{
            throw new error("Error.... haciendo las promesas", error)
        })
        .finally(()=>{
            console.log("----- Cerrando la promesa -----")
        })


    fetch(`${URL_PORT}/peliculas`)
        .then(response => {
            if(!response.ok){
                throw new console.error("Error haciendo la peticion a la API");                
            }
            return response.json()
        })
        .then(data => {
            console.log("----- Recibiendo la data -----")
            data.filter(pelicula => {
                console.log(`Pelicula: ${pelicula.rating>=9.0} ---> ${pelicula.titulo}`);
            });
        })
        .catch( error =>{
            throw new error("Error.... haciendo las promesas", error)
        })
        .finally(()=>{
            console.log("----- Cerrando la promesa -----")
        })
}

// Otra forma de realizar promesas en js es con async / await

export const fetchPromisesAsync = async () => {
    try {
        const response = await fetch(`${URL_PORT}/peliculas`)
        if(!response.ok){
            throw new error("Error haciendo el fetch");
        }
        const data = await response.json();
        // Ya tengo los datos de la url.... ahora los procesamos

        const peliculasFiltradas = data.filter((pelicula) =>{
            pelicula.rating>=9;
        });
        console.log("Peliculas Filtradas: ", peliculasFiltradas);
    } catch (error) {
        throw new error("Error.... haciendo las promesas", error)
    } finally{
        console.log("----- Cerrando la promesa -----")
    }
}