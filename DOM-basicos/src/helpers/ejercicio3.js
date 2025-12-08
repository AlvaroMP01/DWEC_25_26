import { peliculas } from "../db/data"
import fetching from "../utils/fetching"

export default function createEjercicio3() {

  const notFetching = ()=> peliculas;

  const getStars = (rating)=>{
    const numStars = Math.floor(rating/2);
    return "🌟".repeat(numStars);
  }

  const renderMoviesGrid = (moviesArray)=>{
    const container = document.createElement("div");
    container.classList.add("movies-container");
    moviesArray.forEach(movie => {
      const card = document.createElement("div");
      card.classList.add("movie-card");

      // Título
      const h3 = document.createElement("h3");
      h3.classList.add("movie-title");
      h3.textContent = movie.titulo;
      card.appendChild(h3);

      //Año
      const p1 = document.createElement("p");
      p1.classList.add("movie-year");
      p1.textContent = movie.año;
      card.appendChild(p1);

      //Rating
      const p2 = document.createElement("p");
      p2.classList.add("movie-rating");
      p2.textContent = getStars(movie.rating);
      card.appendChild(p2);

      //Añadimos esta tarjeta al container
      container.appendChild(card);
    });
    return container;
  }

  const render = ()=>{
    const mainContainer = document.createElement("div");
    //Version Sincrona
    const v1Wrapper = document.createElement("div");
    v1Wrapper.innerHTML="<h3>Version Sincrona del Ejercicio3</h3>"
    v1Wrapper.appendChild(renderMoviesGrid(notFetching()));
    mainContainer.appendChild(v1Wrapper);

    //Version Asincrona
    const v2Wrapper = document.createElement("div");
    v2Wrapper.style.marginTop="20px"
    v2Wrapper.innerHTML="<h3>Version Asincrona del Ejercicio3</h3>"
    fetching("peliculas")
    .then((data)=>{
      v2Wrapper.appendChild(renderMoviesGrid(data));
    })
    .catch(err=>{
      console.log("Error", err)
      throw new Error ("Error...")
    })
    mainContainer.appendChild(v2Wrapper)
    return mainContainer;
  }

  return {
    render,
  }
}
