# 🌤️ Clima Mundial - Aplicación del Tiempo

Una aplicación web moderna para consultar el clima de cualquier ciudad del mundo, desarrollada con JavaScript vanilla y promesas.

![Weather App](https://img.shields.io/badge/Status-Completed-success)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Vite](https://img.shields.io/badge/Build-Vite-646CFF)

## 📋 Descripción

Esta aplicación permite a los usuarios buscar información meteorológica de ciudades de todo el mundo utilizando la API de OpenWeather. La aplicación está construida siguiendo principios de programación modular con componentes separados y utiliza **Promesas** para el manejo asíncrono de datos.

## ✨ Características

- 🔍 **Búsqueda de ciudades**: Busca el clima de cualquier ciudad del mundo
- 🌡️ **Información completa**: Temperatura, sensación térmica, humedad, presión atmosférica
- 💨 **Datos del viento**: Velocidad y dirección del viento
- ☁️ **Condiciones climáticas**: Nubosidad, visibilidad, descripción del clima
- 🌅 **Horarios solares**: Hora de amanecer y atardecer
- 🎨 **Diseño moderno**: Interfaz premium con glassmorphism y animaciones suaves
- 📱 **Responsive**: Adaptado para dispositivos móviles, tablets y escritorio
- ⚡ **Rápido**: Construido con Vite para un desarrollo y carga ultra-rápidos

## 🏗️ Arquitectura del Proyecto

El proyecto está organizado siguiendo una arquitectura modular que separa la lógica de programación:

```
app_clima/
├── src/
│   ├── components/          # Componentes de la UI
│   │   ├── ClimaApp.js     # Componente principal (gestión de estado)
│   │   ├── SearchCard.js   # Componente de búsqueda
│   │   └── WeatherCard.js  # Componente de visualización del clima
│   ├── helpers/            # Funciones auxiliares
│   │   └── weatherAPI.js   # Lógica de API con Promesas
│   ├── App.js              # Punto de entrada de la aplicación
│   ├── main.js             # Inicialización
│   └── style.css           # Estilos globales
├── .env                    # Variables de entorno
├── index.html              # HTML principal
└── package.json            # Dependencias
```

### 📦 Componentes

#### 1. **ClimaApp.js** (Componente Principal)
- Gestiona el estado de la aplicación
- Coordina la comunicación entre componentes
- Maneja la lógica de búsqueda con Promesas
- Controla las vistas (búsqueda/clima)
- Gestiona estados de carga y errores

#### 2. **SearchCard.js** (Componente de Búsqueda)
- Formulario de búsqueda de ciudades
- Sugerencias de ciudades populares
- Validación de entrada
- Eventos de búsqueda

#### 3. **WeatherCard.js** (Componente de Clima)
- Visualización de datos meteorológicos
- Iconos dinámicos según el clima
- Información detallada en grid
- Botón para nueva búsqueda

#### 4. **weatherAPI.js** (Helper de API)
- Función `getWeatherByCity()` que retorna una **Promesa**
- Manejo de errores de API
- Formateo de datos
- Funciones auxiliares (iconos, dirección del viento)

## 🔧 Uso de Promesas

La aplicación utiliza **Promesas** para manejar las llamadas asíncronas a la API:

```javascript
// En weatherAPI.js
export function getWeatherByCity(city) {
    return new Promise((resolve, reject) => {
        // Validación
        if (!city || city.trim() === '') {
            reject(new Error('El nombre de la ciudad es requerido'));
            return;
        }

        // Llamada a la API con fetch
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                return response.json();
            })
            .then(data => {
                resolve(formatWeatherData(data));
            })
            .catch(error => {
                reject(error);
            });
    });
}

// En ClimaApp.js - Consumo de la promesa
getWeatherByCity(city)
    .then(data => {
        weatherData = data;
        renderWeatherView();
    })
    .catch(error => {
        showError(error.message);
    });
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (v14 o superior)
- npm o yarn

### Instalación

1. **Clonar o descargar el proyecto**

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**

El archivo `.env` ya está configurado con la API key:
```env
VITE_OPENWEATHER_API_KEY=56e0f10ebae7bcd71c43aad7d0a89fcd
VITE_OPENWEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
```

4. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

5. **Abrir en el navegador**
```
http://localhost:5173
```

### Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🎨 Características de Diseño

- **Glassmorphism**: Efectos de vidrio esmerilado modernos
- **Gradientes vibrantes**: Paleta de colores HSL personalizada
- **Animaciones suaves**: Transiciones y micro-animaciones
- **Modo oscuro**: Diseño optimizado para visualización nocturna
- **Tipografía moderna**: Fuente Inter de Google Fonts
- **Iconos emoji**: Representación visual del clima
- **Responsive design**: Adaptado a todos los tamaños de pantalla

## 📊 Información Mostrada

La aplicación muestra los siguientes datos meteorológicos:

- 🌡️ **Temperatura actual** (en °C)
- 🤔 **Sensación térmica**
- 💧 **Humedad** (en %)
- 💨 **Velocidad del viento** (m/s) y dirección
- 🌡️ **Presión atmosférica** (hPa)
- ☁️ **Nubosidad** (en %)
- 👁️ **Visibilidad** (en km)
- 🌅 **Hora de amanecer**
- 🌇 **Hora de atardecer**
- 🌤️ **Descripción del clima** (soleado, nublado, lluvioso, etc.)

## 🌍 API Utilizada

**OpenWeather API**
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Parámetros:
  - `q`: Nombre de la ciudad
  - `units=metric`: Unidades métricas (Celsius)
  - `lang=es`: Idioma español
  - `appid`: API Key

## 🔒 Seguridad

- Las credenciales de API están almacenadas en variables de entorno (`.env`)
- El archivo `.env` debe estar en `.gitignore` para no exponer la API key
- Validación de entrada del usuario
- Manejo de errores robusto

## 📱 Compatibilidad

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Dispositivos móviles (iOS y Android)

## 🎯 Funcionalidades Técnicas

### Separación de Lógica
- **Componentes**: Cada componente tiene una responsabilidad única
- **Helpers**: Lógica de API separada de la UI
- **Estado centralizado**: Gestión de estado en ClimaApp
- **Eventos desacoplados**: Callbacks para comunicación entre componentes

### Manejo de Errores
- Validación de entrada
- Manejo de errores de red
- Mensajes de error descriptivos
- Estados de carga visuales

### Optimizaciones
- Lazy loading de datos
- Transiciones CSS optimizadas
- Código modular y reutilizable
- Build optimizado con Vite

## 🤝 Contribuciones

Este proyecto fue desarrollado como ejercicio educativo para demostrar:
- Uso de Promesas en JavaScript
- Arquitectura de componentes
- Separación de responsabilidades
- Consumo de APIs REST
- Diseño moderno de interfaces

## 📝 Licencia

Este proyecto es de uso educativo.

## 👨‍💻 Autor

Desarrollado como parte del curso DWEC 25/26

---

**¡Disfruta explorando el clima mundial! 🌍☀️🌧️❄️**
