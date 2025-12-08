
export default function createImageCard(images,onImageClick,onFavouriteToggle) {
    //Variables que quiero que sean privadas
    let isCurrentlyFavourite = false;

    //Creamos la card
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group-relative"

    //!DATASET --> Para marcar las card con un id
    card.dataset.imageId = images.id;
    const img = document.createElement("img");
    img.src = images.url;
    img.alt = images.title;
    img.className = "w-full h-64 object-cover group-hover:opacity-90 transition-opacity"

    //img.onerror = () => {img.src = "url con imagen de error"}

    //Inyectar la img en el div ("card")
    card.appendChild(img);

    const infoContainer = document.createElement("div");
    infoContainer.className = "p-4 bg-white"

    const imgTitle = document.createElement("h3");
    imgTitle.className = "font-bold text-lg text-gray-800 mb-1";
    imgTitle.textContent = images.title;

    const imgAuthor = document.createElement("p");
    imgAuthor.className = "text-sm text-gray-600"
    imgAuthor.textContent = images.author;

    infoContainer.appendChild(imgTitle);
    infoContainer.appendChild(imgAuthor);

    card.appendChild(infoContainer);

    //card.onclick ("Poner un alert que diga: Has pulsado la tarjeta xxxx (el id está en el dataset)")

    return{
        element: card,
    };
}
