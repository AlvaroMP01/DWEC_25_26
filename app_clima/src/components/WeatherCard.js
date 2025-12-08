export default function createWeatherCard(){
    let currentWeather = null;

    //DOM
    const container = document.createElement('div');
    container.className = 'bg-gradient-to-br from-blue-50 to-blue-200 rounded-lg shadow-lg mb-6p-6 hidden';

    const cityHeader = document.createElement('h2')
    cityHeader.className = 'text-2xl font-bold text-blue-900 mb-2';

    const temperatureElement = document.createElement('div');
    temperatureElement.className = 'text-2xl font-bold text-blue-900 mb-2';

    const description = document.createElement('p');
    description.className = 'text-lg text-gray-600 mb-2';
    
    //grid para la info
    const datailsContainer = document.createElement('div');
    datailsContainer.className = 'grid grid-cols-2 gap-4 mb-6 bg-white rounded-lg p-2';

    const humidityElement = document.createElement('p');
    humidityElement.className = 'text-sm text-gray-600 mb-2';
    
    const windElement = document.createElement('p');
    windElement.className = 'text-sm text-gray-600 mb-2';

    const iconElement = document.createElement('img');
    iconElement.className = 'w-12 h-12 mb-2';

    //render 
    function render(weatherData){
        /* {
            city: data.name,
            country: data.sys.country,
            temperature: Math.round(data.main.temp),
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            description: data.weather[0].description,
            icon: data.weather[0].icon
        } */
        
        currentWeather = weatherData;

        //ciudad
        cityHeader.textContent = `${weatherData.city}, ${weatherData.country}`;
        
        //temperatura
        temperatureElement.textContent = `${weatherData.temperature}°C`;
        
        //descripcion
        description.textContent = weatherData.description;
        
        //humedad
        humidityElement.textContent = `Humedad: ${weatherData.humidity}%`;
        
        //viento
        windElement.textContent = `Viento: ${weatherData.windSpeed} m/s`;
        
        /* //icono
        iconElement.src = getWeatherIcon(weatherData.icon); */
        
        //Ensamblamos en la data
        container.appendChild(cityHeader);
        container.appendChild(temperatureElement);
        container.appendChild(description);
        container.appendChild(datailsContainer);
        container.appendChild(iconElement);
        
        
    }
    
    //Devuelve el elemento
    return {
        element: container,
        setWeather: (weatherData) => render(weatherData)
    }
}