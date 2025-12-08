import { bienvenida } from "../db/data"

export default function createEjercicio1() {
  // closure SCOPE
  //variables privadas

  const fetching = async ()=>{
    const PORT = import.meta.env.VITE_PORT || 4001;
    const URL = import.meta.env.VITE_URL || 'http://localhost';
    const URL_PORT = `${URL}:${PORT}`;
    try {
        const response = await fetch(`${URL_PORT}/bienvenida`);
        if(!response.ok)throw new Error("Error fetching: ", response.status);
        const data = await response.json();
        return data.texto;
    } catch (err) {
        console.log("Error: ", err)
        throw err;
    }
};

const notFetching = ()=> bienvenida.texto;

const render = ()=>{
    //Aqui decidimos que pintar y donde pintar
    const container = document.createElement("div");
    //Pintamos la version sincrona
    const p1Wrapper = document.createElement("div");
    p1Wrapper.innerHTML="<strong>Version 1 sincrona</strong>"
    const p1 = document.createElement("p");
    //A este parrafaro le ponsemos el estilo del css que dice el ejercicio
    p1.classList.add("welcome-message");
    p1.textContent = notFetching();
    p1Wrapper.appendChild(p1);
    container.appendChild(p1Wrapper);

    //Pintamos la version asincrona
    const p2Wrapper = document.createElement("div");
    p2Wrapper.innerHTML="<strong>Version 2 Asincrona</strong>"
    const p2 = document.createElement("p");

    fetching()
        .then(texto =>{
            p2.textContent = texto;
            p2.classList.add("welcome-message");
        })
        .catch(err =>{
            p2.textContent = `Error: ${err} al cargar los datos del servidor.`;
            p2.classList.remove("welcome-message");
            p2.classList.add("error");
        });
    p2Wrapper.appendChild(p2);
    container.appendChild(p2Wrapper);

    return container;
};
    return {
        render
    }
}
