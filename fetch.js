async function updateTable() {
    try {
        // Pobieramy dane tylko z jednego API
        const response = await fetch('https://apis.codante.io/olympic-games/countries');
        const data = await response.json();
        
        const tableBody = document.getElementById('table-body');
        tableBody.innerHTML = ""; // Czyścimy tabelę

        data.data.forEach(country => {
            // 1. Używamy ID jako nazwy (zmieniamy na wielkie litery dla pewności)
            const countryId = country.id.toUpperCase();
            
            // 2. Przygotowujemy kod do flagi (zazwyczaj małe litery w klasach CSS)
            const flagCode = country.id.toLowerCase();

            // 3. Sumujemy wszystkie medale
            const totalMedals = country.gold_medals + country.silver_medals + country.bronze_medals;

            // 4. Ranking jako "Liczba igrzysk"
            const ranking = country.rank;

            const row = `
                <tr>
                    <td>
                        ${countryId} 
                        <span class="flag">${flagCode}</span>
                    </td>
                    <td>${totalMedals}</td>
                    <td>${ranking}</td>
                </tr>
            `;
            
            tableBody.insertAdjacentHTML('beforeend', row);
        });

        console.log("Tabela wygenerowana pomyślnie z ID i flagami!");

    } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
    }
}

updateTable();
