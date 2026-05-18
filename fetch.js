async function updateTable() {
    try {
        // Zmieniamy adres na /countries - on zawiera informacje o medalach
        const response = await fetch('https://apis.codante.io/olympic-games/countries');
        const data = await response.json();
        
        const tableBody = document.getElementById('table-body');
        tableBody.innerHTML = ""; // Czyścimy tabelę

        // API zwraca dane w tablicy data.data
        data.data.forEach(country => {
            // Obliczamy całkowitą liczbę medali (suma złotych, srebrnych i brązowych)
            const totalMedals = country.gold_medals + country.silver_medals + country.bronze_medals;
            
            // Przyjmijmy, że "Liczba Igrzysk" to u nas pozycja w rankingu (rank) 
            // lub możemy tam zostawić inną informację z API.
            const ranking = country.rank;

            const row = `
                <tr>
                    <td>
                        ${country.name} 
                        <span class="flag">${country.id.toLowerCase()}</span>
                    </td>
                    <td>${totalMedals}</td>
                    <td>${ranking}</td>
                </tr>
            `;
            tableBody.insertAdjacentHTML('beforeend', row);
        });
    } catch (error) {
        console.error("Błąd podczas aktualizacji tabeli:", error);
    }
}

updateTable();
