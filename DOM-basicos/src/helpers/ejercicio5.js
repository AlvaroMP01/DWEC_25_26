import { ubicaciones } from "../db/data";
import fetching from "../utils/fetching";

export default function CreateEjercicio5() {

    const notFetching=()=>ubicaciones

    const renderForm=(ubicacionesArray)=>{
        const container= document.createElement("div")
        container.classList.add("message-container")

        const titulo=document.createElement("h1")
        titulo.textContent="Buscar alojamiento"

        const formulario= document.createElement("form")
        formulario.classList.add("form-group")

        const select= document.createElement("select")
        select.classList.add("form-row")
        select.required=true
        ubicacionesArray.forEach(ubicacion => {
            let ubi = document.createElement("option")
            ubi.textContent=ubicacion.nombre;
            select.appendChild(ubi)
        });

        const labelChekIn=document.createElement("label")
        labelChekIn.textContent="Introduce la fecha de entrada"
        const chekIn= document.createElement("input")
        chekIn.type="date"
        chekIn.required="true"
        
        const labelChekOut=document.createElement("label")
        labelChekOut.textContent="Introduce la fecha de salida"
        const chekOut= document.createElement("input")
        chekOut.type="date"
        chekOut.required= "true"

        const boton= document.createElement("button")
        boton.textContent="buscar"
        
        const alerta= document.createElement("h3");

        formulario.addEventListener("submit", (event) => {
        const inDate = new Date(chekIn.value)
        const outDate = new Date(chekOut.value)
        if (outDate <= inDate) {
            event.preventDefault()
            alerta.textContent="La fecha del checkout debe de ser posteior a la del CheckIn"
            alerta.classList.add("error")
        }else{
            alerta.textContent="Todo correcto✅"
            alerta.classList.add("sucess")
        }
    })
        formulario.appendChild(select)
        formulario.appendChild(labelChekIn)
        formulario.appendChild(chekIn)
        formulario.appendChild(labelChekOut)
        formulario.appendChild(chekOut)
        formulario.appendChild(boton)
        container.appendChild(titulo)
        container.appendChild(formulario)
        container.appendChild(alerta)
        
        return container
    }

    const render=()=>{
        const mainContainer= document.createElement("div")
        //sincrona
        const v1Wrapper= document.createElement("div")
        v1Wrapper.innerHTML="<h3>Version sincrona del ejercicio5</h3>"
        v1Wrapper.appendChild(renderForm(notFetching()))
        mainContainer.appendChild(v1Wrapper)

        //asincrona
        const v2Wrapper= document.createElement("div")
        v2Wrapper.innerHTML="<h3>Versión asincrona del ejercicio5</h3>"
        fetching("ubicaciones")
            .then(
                data=>{
                    v2Wrapper.appendChild(renderForm(data))
                }
            )
            .catch(err=>{
                console.log("Error...",err)
                throw new Error("Error...")
            })
            mainContainer.appendChild(v2Wrapper)

        return mainContainer
    }
  return {render}
}