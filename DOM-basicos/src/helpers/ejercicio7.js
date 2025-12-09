import { publicaciones } from "../db/data"
import fetching from "../utils/fetching"

export default function createEjercicio7() {
    const notFetching=()=>publicaciones

    const renderPublicaciones=(publicacionesArray)=>{
        const container= document.createElement("div")
        container.classList.add("blog-container")

        const blog= document.createElement("h1")
        blog.textContent="Blog"
        container.appendChild(blog)

        publicacionesArray.forEach(publicacion => {
            const articulo= document.createElement("div")
            articulo.classList.add("post")

            const title= document.createElement("p")
            title.classList.add("post-title")
            title.textContent=publicacion.titulo

            const metaDatos= document.createElement("p")
            metaDatos.classList.add("post-meta")
            metaDatos.textContent=`${publicacion.autor} | ${publicacion.fecha}`

            const contenido=document.createElement("p")
            contenido.classList.add("post-content")
            contenido.textContent=(publicacion.contenido)

            const contenedorEtiquetas= document.createElement("div")
            publicacion.etiquetas.forEach(etiqueta => {
                let label=document.createElement("p")
                label.classList.add("tag")
                label.textContent=etiqueta;
                contenedorEtiquetas.appendChild(label)
            });
            const contadorLikes= document.createElement("p")
            contadorLikes.classList.add("likes-count")
            contadorLikes.textContent=`❤️ ${publicacion.likes}`

            articulo.appendChild(title)
            articulo.appendChild(metaDatos)
            articulo.appendChild(contenido)
            articulo.appendChild(contenedorEtiquetas)
            articulo.appendChild(contadorLikes)
            container.appendChild(articulo)
        });
        return container
    }

    const render=()=>{
        const mainContainer=document.createElement("div")
        //version sincrona
        const v1Wrapper=document.createElement("div")
        v1Wrapper.innerHTML="<h4>Version sincrona del ejercicio7</h4>"
        v1Wrapper.appendChild(renderPublicaciones(notFetching()))
        mainContainer.appendChild(v1Wrapper)

        //version asincrona
        const v2Wrapper=document.createElement("div")
        v2Wrapper.innerHTML="<h4>Versión asincrona del ejercicio7</h4>"
        fetching("publicaciones")
            .then(data=>{
                v2Wrapper.appendChild(renderPublicaciones(data))
            }
        )
        .catch(err=>{
            console.log("Error", err)
            throw new Error("Error...")
        })
        mainContainer.appendChild(v2Wrapper)

        return mainContainer
    }
    return {render}
}