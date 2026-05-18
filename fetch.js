(async () => {
    // 1. Pobieramy dane z API
    const response = await fetch('https://apis.codante.io/olympic-games/events');
    const data = await response.json();
    
    // Dane z tego API są w tablicy data.data
    const events = data.data;

    // 2. Znajdujemy miejsce w HTML, gdzie chcemy wstawić wiersze
    const tableBody = document.getElementById('table-body');

    // 3. Czyścimy tabelę na wszelki wypadek
    tableBody.innerHTML = "";

    // 4. Przechodzimy przez pobrane wydarzenia (events)
    // UWAGA: API zwraca wydarzenia, a Ty masz tabelę krajów. 
    // Poniżej przykład, jak wygenerować wiersz na podstawie danych z API:
    events.forEach(event => {
        const country = event.competitors[0]?.name || "N/A";
        const countryCode = event.competitors[0]?.country_id.toLowerCase() || "un";

        // Tworzymy wiersz (HTML), który wcześniej był w index.html
        const row = `
            <tr>
                <td>${country} <span class="flag">${countryCode}</span></td>
                <td>Pobieranie...</td>
                <td>${event.discipline_name}</td>
            </tr>
        `;
        
        // Dodajemy wiersz do tabeli
        tableBody.insertAdjacentHTML('beforeend', row);
    });
})();
