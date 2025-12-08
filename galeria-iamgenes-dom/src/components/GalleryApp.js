import { imagesData } from "../data/images";
import createImageCard from "./ImageCard";

export default function createGalleryApp() {
    
    //Para crear un objeto del DOM
    const container = document.createElement("div");
    //Poner className 
    container.className="min-h-screen bg-linear-to-br from-purple-400 via-white to-pink-400"

    //Header
    const header = document.createElement("header");
    header.className = "bg-white shadow-lg sticky top-0 z-40"

        //!Creamos un div para guardar los elementos del header para poder trabajar mejor. ESte div ira dentro del Header
    const headerContainer = document.createElement("div");

    const headerTitle = document.createElement("h1");
    headerTitle.className = "text-3xl font-bold text-purple-800 mb-1"
    headerTitle.textContent = "🎨 Galeria de imágenes. ";
    const headerSubtitle = document.createElement("p");
    headerSubtitle.className = "text-gray-600"
    headerSubtitle.textContent = "👨‍💻 Aprende Closures, funciones fábrica y el uso del DOM."
    
    //Añadimos los elementos title y subtitle al header
    headerContainer.appendChild(headerTitle);
    headerContainer.appendChild(headerSubtitle);

        //!Aqui guardamos el div en el header
    header.appendChild(headerContainer);

    //mainContent
    const main = document.createElement("main");
    main.className = "max-w-7xl mx-auto px-6 py-8";

    //Contador de favoritos
    const counterFavComponent = document.createElement("h2");
    counterFavComponent.textContent = "<-- Aqui va renderizado el componente FavouritesCounter -->"
    main.appendChild(counterFavComponent);

    //! Grid Images --> Cambios hechos
    const gridContainer = document.createElement("div");

    imagesData.forEach(imageData => {
        const card = createImageCard(
            imagesData,
            () => alert(`Clic en: ${imageData.title}`),
            () => console.log(`Hover en: ${imageData.title}`)
        );
        gridContainer.appendChild(card.element);
    });
    main.appendChild(gridContainer);
    
    /* const gridImgComponent = createImageCard(
        imagesData[0],
        ()=>{},
        ()=>{}
    ); */
    main.appendChild(gridImgComponent.element);
    //! Hasta aqui

    //Footer
    const footer = document.createElement("footer");
    footer.className = "bg-gray-900 text-white py-8 pt-12"

    const footerContainer = document.createElement("div");
    footerContainer.className = "max-w-7xl mx-auto px-6 text-center"
    const footerText = document.createElement("p");
    footerText.className = "text-gray-400";
    //footerText.textContent = ""
        //Con innerHTML podemos inyectar etiquetas HTML
    footerText.innerHTML = "<b>Proyecto Educativo by Álvaro Morcillo Perez</b>";
    footerContainer.appendChild(footerText);
    footer.appendChild(footerContainer);


    //Ensamblemos toda la pagina WEB
    container.appendChild(header);
    container.appendChild(main);
    container.appendChild(footer);

    return{
        element : container,
        //Aqui iran las funciones que necesite
        
    }
}
