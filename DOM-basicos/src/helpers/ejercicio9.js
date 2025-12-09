
export default function createEjercicio9() {
    const fetching = async () => {
        const PORT = import.meta.env.VITE_PORT || 4001;
        const URL = import.meta.env.VITE_URL || "http://localhost";
        const URL_PORT = `${URL}:${PORT}`;

        try {
            const response = await fetch(`${URL_PORT}/eventos`);
            if (!response.ok) throw new Error(`Error fetching: ${response.status}`);
            const data = await response.json();
            return data;
        } catch (err) {
            console.error("Error: ", err);
            throw err;
        }
    };

    const render = async () => {
        const eventos = await fetching();

        const mainContainer = document.createElement('div');
        mainContainer.classList.add('timeline-container');

        const lineTemporal = document.createElement('div');
        lineTemporal.classList.add('timeline-line');
        mainContainer.appendChild(lineTemporal);

        eventos.forEach((evento, index) => {
            const eventoContainer = document.createElement('div');
            eventoContainer.classList.add('timeline-item');

            if (index % 2 === 0) {
                eventoContainer.classList.add('left');
            } else {
                eventoContainer.classList.add('right');
            }

            const nombreEvento = document.createElement('h3');
            nombreEvento.textContent = evento.nombre;
            nombreEvento.classList.add('event-title');
            eventoContainer.appendChild(nombreEvento);

            const fechaYHora = document.createElement('p');
            fechaYHora.textContent = `📅 ${evento.fecha} - ${evento.hora}`;
            fechaYHora.classList.add('event-datetime');
            eventoContainer.appendChild(fechaYHora);

            const lugarEvento = document.createElement('p');
            lugarEvento.textContent = `📍 ${evento.lugar}`;
            lugarEvento.classList.add('event-location');
            eventoContainer.appendChild(lugarEvento);

            const ponentes = document.createElement('p');
            ponentes.textContent = `👥 Ponentes: ${evento.ponentes.join(', ')}`;
            ponentes.classList.add('speakers-list');
            eventoContainer.appendChild(ponentes);

            const precioYAsistentes = document.createElement('p');
            precioYAsistentes.textContent = `💰 ${evento.precio}€ | 👤 ${evento.asistentes} asistentes`;
            precioYAsistentes.classList.add('event-meta');
            eventoContainer.appendChild(precioYAsistentes);

            mainContainer.appendChild(eventoContainer);
        });

        return mainContainer;
    }

    return {
        render
    }
}