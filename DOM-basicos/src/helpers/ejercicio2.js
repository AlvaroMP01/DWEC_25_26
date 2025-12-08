import { tareas } from "../db/data"
import fetching from "../utils/fetching";

export default function createEjercicio2() {

    const notFetching = ()=> tareas;

    const renderList = (taskListArray) => {
      const ul = document.createElement("ul");
      ul.classList.add("task-list");
      taskListArray.forEach(task => {
        const li = document.createElement("li");
        li.classList.add("task-item");
        if(task.completada){
          li.classList.add("completed");
        }
        li.textContent = task.completada 
        ?`✅ ${task.texto}`
        :`❌ ${task.texto}`;
        ul.appendChild(li);
      });
      return ul;
    }

    const render = ()=>{
        const container = document.createElement("div");
        //Version sincrona
        const v1Wrapper = document.createElement("div");
        v1Wrapper.innerHTML="<h3>Versión Síncrona del Ejercicio2</h3>"
        v1Wrapper.appendChild(renderList(notFetching()));
        container.appendChild(v1Wrapper);
        
        //Version asincrona
        const v2Wrapper = document.createElement("div");
        v2Wrapper.innerHTML="<h3>Versión asincrona del Ejercicio2</h3>"
        fetching("tareas")
        .then((data)=>{
          v2Wrapper.appendChild(renderList(data));
          container.appendChild(v2Wrapper);
        })
      .catch(err=>{
        console.log("Error", err)
      })
      return container;
    }


  return {
    render,
  }
}
