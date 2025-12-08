import App from "./App";
import "./style.css";

/*
import createButton from "./components/createButton.js";
import createCounter from "./utils/createCounter";
import createThemeManager from "./utils/createThemeManager";
document.querySelector('#app').innerHTML = `
<div>
<h1 class="text-4xl">Galeria de Imagenes DOM</h1>
</div>
`;


const counter1 = createCounter(10);
const counter2 = createCounter(1);

counter1.decrement();
counter2.increment();
counter1.count=10;
counter1.valueCount();

const myTheme = createThemeManager();
myTheme.getTheme();
myTheme.setTheme("dark");
myTheme.toggle();

const primaryButton=createButton();
const dangerButton=createButton({
  text: "Guardar",
  className: "px-6 py-3 bg-red-500 text-white rounded hover:bg-red-800",
  onClick: ()=>console.log("Guardando..."),
  type: "button"
})

//Añadimos los botones creados al DOM
const divApp = document.getElementById("app")
divApp.appendChild(primaryButton);
divApp.appendChild( dangerButton);*/

document.addEventListener("DOMContentLoaded", ()=>{
  const appContainer = document.getElementById("app");
  const app = App();
  appContainer.appendChild(app);
  console.log("✅ Inicializando mi aplicación...")
})