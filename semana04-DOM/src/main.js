import './style.css';
import viteLogo from '/vite.svg';
//-----------------Funciones-----------------
function handleClickQuerySelectorSpecial(){
  alert("Has pulsado el botón de especial");
  const elementoEspecial=document.querySelector(".especial");
  elementoEspecial.classList.add("text-red-500");
};

function handleClickQuerySelectorComun(){
  alert("Has pulsado el boton de comun");
  const elementoComun=document.querySelector(".comun");
  elementoComun.classList.add("text-green-700");
}


//---------Inicio de la aplicacion-----------
const btnEspecial=document.getElementById("btn-especial");
btnEspecial.addEventListener("click", handleClickQuerySelectorSpecial);

const btnComun=document.getElementById("btn-comun");
btnComun.addEventListener("click", handleClickQuerySelectorComun);







const app = document.getElementById("app");