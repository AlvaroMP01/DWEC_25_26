import createEjercicio1 from "./helpers/ejercicio1";
import createEjercicio2 from "./helpers/ejercicio2";
import createEjercicio3 from "./helpers/ejercicio3";
import createEjercicio4 from "./helpers/ejercicio4";

export default function createApp(){
    const app = document.getElementById("app");
    //limpiamos
    app.innerHTML=""
    //titulo
    const title = document.createElement("h1")
    title.textContent = "Ejercicios DOM - Solución - "
    app.appendChild(title)
    app.appendChild(createEjercicio1().render())
    app.appendChild(createEjercicio2().render())
    app.appendChild(createEjercicio3().render())
    app.appendChild(createEjercicio4().render())
}