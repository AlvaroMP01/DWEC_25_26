// Fichero que realiza las peticiones a mi API
/**
 * {
  "coord": {
    "lon": -3.25,
    "lat": 37.25
  },
  "weather": [
    {
      "id": 801,
      "main": "Clouds",
      "description": "algo de nubes",
      "icon": "02d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 7.94,
    "feels_like": 7.18,
    "temp_min": 7.94,
    "temp_max": 7.94,
    "pressure": 1019,
    "humidity": 79,
    "sea_level": 1019,
    "grnd_level": 854
  },
  "visibility": 10000,
  "wind": {
    "speed": 1.61,
    "deg": 273,
    "gust": 1.63
  },
  "clouds": {
    "all": 19
  },
  "dt": 1764606792,
  "sys": {
    "type": 2,
    "id": 2008325,
    "country": "ES",
    "sunrise": 1764572909,
    "sunset": 1764608162
  },
  "timezone": 3600,
  "id": 2517115,
  "name": "Granada",
  "cod": 200
}*/
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const API_URL = import.meta.env.VITE_OPENWEATHER_API_URL;

export async function getWeatherByCity(city) {
    try {
        const response = await fetch(`${API_URL}${city}&units=metric&lang=es&appid=${API_KEY}`);
        if(!response.ok){
            if(response.status === 404) throw new Error('Ciudad no encontrada');
            throw new Error('Error al obtener los datos del clima');
        }

        return await response.json();

    } catch (error) {
        throw new Error(`Error http: ${error.message}`);
    }
}

export function parseWeatherData(data){
    return {
        city: data.name,
        country: data.sys.country,
        temperature: Math.round(data.main.temp),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
    }
}