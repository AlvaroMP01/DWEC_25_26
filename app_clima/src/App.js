
import createClimateApp from './components/ClimateApp.js';

export default function createApp() {
  const appContainer = document.querySelector('#app');

  //Pintar pagina web
  
  const ClimateApp = createClimateApp();
  appContainer.appendChild(ClimateApp.element);
}