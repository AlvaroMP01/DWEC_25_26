import createGalleryApp from "./components/GalleryApp"

export default function App() {
  //Aqui creamos la galería <-- GalleryApp
  const gallerApp=createGalleryApp();
  return gallerApp.element;
}
