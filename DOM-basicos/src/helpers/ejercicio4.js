// src/ejercicio4.js

import { alojamientos } from '../db/data';
import fetching from '../utils/fetching';


export default function createEjercicio4() {
    const getStars = (rating) => {
        const numStars = Math.floor(rating);
        return '★'.repeat(numStars) ;
    };

    const renderAlojamientosTable = (alojamientosArray) => {
        const container = document.createElement('div');
        container.classList.add('table-container');
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const headerFila = document.createElement('tr');

    //Cabecera de la Tabla
    const cabecera = ['Nombre', 'Ubicación', 'Precio', 'Rating'];
    cabecera.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerFila.appendChild(th);
    });
    thead.appendChild(headerFila);
    table.appendChild(thead);

    // Tabla body
    const tbody = document.createElement('tbody');
    
    // Crear una fila
    alojamientosArray.forEach(alojamiento => {
        const row = document.createElement('tr');
        
        // nombre
        const nombreCell = document.createElement('td');
        nombreCell.textContent = alojamiento.nombre;
        row.appendChild(nombreCell);
        
        // ubicación
        const ubicacionCell = document.createElement('td');
        ubicacionCell.textContent = alojamiento.ubicacion;
        row.appendChild(ubicacionCell);
        
        // precio
        const precioCell = document.createElement('td');
        precioCell.classList.add('price');
        precioCell.textContent = `$${alojamiento.precio}`;
        row.appendChild(precioCell);
        
        //rating
        const ratingCell = document.createElement('td');
        ratingCell.classList.add('rating');
        ratingCell.textContent = getStars(alojamiento.rating);
        row.appendChild(ratingCell);
        
        // Añadir la fila al cuerpo de la tabla
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    container.appendChild(table);
    
    return container;
    };

  // Función principal de renderizado
    const render = () => {
        const mainContainer = document.createElement('div');
        
        // Versión Síncrona
        const v1Wrapper = document.createElement('div');
        v1Wrapper.style.marginTop = '20px';
        v1Wrapper.innerHTML = '<h3>Version Sincrona del Ejercicio4</h3>';
        v1Wrapper.appendChild(renderAlojamientosTable(alojamientos));
        mainContainer.appendChild(v1Wrapper);
        
        // Versión Asíncrona
        const v2Wrapper = document.createElement('div');
        v2Wrapper.style.marginTop = '20px';
        v2Wrapper.innerHTML = '<h3>Version Asincrona del Ejercicio4</h3>';
        
        fetching('alojamientos')
        .then((data) => {
            v2Wrapper.appendChild(renderAlojamientosTable(data));
        })
        .catch(err => {
            console.log('Error', err);
            throw new Error("Error...");
        });
        
        mainContainer.appendChild(v2Wrapper);
        
        return mainContainer;
    };

  return {
    render,
  };
}