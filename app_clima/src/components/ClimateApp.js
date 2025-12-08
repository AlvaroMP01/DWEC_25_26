import { getWeatherByCity } from "../helpers/weatherAPI";
import createWeatherCard from "./WeatherCard";

export default function createClimateApp() {
    const container = document.createElement('div');
    container.className = 'min-h-screen bg-gradient-to-b from-blue-200 to-blue-50 p-6';

    const header = document.createElement('header');
    header.className = 'text-center mb-6';

    /* const title = document.createElement('h1');
    title.className = 'text-3xl font-bold text-blue-900 mb-2';
    title.textContent = '☁ App del Clima';
    const subtitle = document.createElement('h2');
    subtitle.className = 'font-semibold text-gray-600';
    subtitle.textContent = 'Tu aplicación de clima';
    header.appendChild(title);
    header.appendChild(subtitle); */
    
    header.innerHTML=`
    <h1 class="text-3xl font-bold text-blue-900 mb-2>App del Clima">
        ⛅ App del Clima
    </h1>
    <h3 class="font-semibold text-gray-700">
        Tu aplicación de clima
    </h3>
    `;

    //main
    const main=document.createElement('main');
    main.className='max-w-2xl mx-auto';

        //Tarjeta de búsqueda
    const searchWeatherCard = createWeatherCard(async cityName => {
        try {
            //fetch data
            const fetchData = await getWeatherByCity(cityName);
            //data parseada
            const weatherData = parseWeatherData(fetchData);
            weatherCard.setWeather(weatherData);
        } catch (error) {
            console.error(error);
        }
    });

    //footer



    //ensamblaje
    container.appendChild(header);
    container.appendChild(main);
    container.appendChild(searchWeatherCard.element);




    return {
        element: container
    };
}