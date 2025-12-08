export default function createSearchCard(onSearch){
    //Elementos privados
    let isSearching = false;

    //DOM
    const container = document.createElement('div');
    container.className = 'bg-white rounded-lg shadow-lg mb-6';

        //title
        const title = document.createElement('h2');
        title.className = 'text-2xl font-bold text-blue-700 mb-4';
        title.textContent = '🔍 Buscar Ciudad';

        //input
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Escribe el nombre de tu ciudad...';
        input.className = 'w-full py-2 px-4 border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 mb-3';

        //button
        const searchButton = document.createElement('button');
        searchButton.textContent = '🔍 Buscar';
        searchButton.className = 'w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300';

        //loading status
        const statusElement = document.createElement('p');
        statusElement.className = 'text-sm text-gray-600 mt-3 mb-3';
        statusElement.textContent = '';

        function setEstatus(message, type="info"){
            statusElement.textContent = message;
            statusElement.className = 'text-sm mt-3 mb-3';
            if(type === "loading"){
                statusElement.className += 'text-blue-600';
            }else if(type === "success"){
                statusElement.className += 'text-green-600';
            }else if(type === "error"){
                statusElement.className += 'text-red-600';
            }else{
                statusElement.className += 'text-gray-600';
            }
        }
    
    async function performSearch(){
        const cityName = input.value.trim();
        if(!cityName){
            setEstatus("⚠ Introduce un nombre de ciudad", "error");
            return;
        }
        try {
            isSearching = true;

            setEstatus("⏳ Buscando...", "loading");

            await onSearch(cityName);
            setEstatus("✅ Busqueda exitosa", "success");

        } catch (error) {
            setEstatus(`❌ Error: ${error.message}`, "error");
        } finally {
            isSearching = false;
        }
    }
    
    // Eventos
    //Evento de click del botón
    searchButton.addEventListener('click', performSearch);

    //Evento enter del input
    input.addEventListener('keypress', event => {
        if(event.key === 'Enter'){
            performSearch();
        }
    });

    //Pintamos Todo
    container.appendChild(title);
    container.appendChild(input);
    container.appendChild(searchButton);
    container.appendChild(statusElement);

    return{
        element:container,
        clear: () => {
            input.value = '';
            isSearching = false;
            statusElement.textContent = '';
        },
        getValue: () => input.value.trim(),
        focus: () => input.focus(),
    }
}