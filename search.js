async function search() {
  try {
      const response = await fetch('https://apis.codante.io/olympic-games/countries');
      const data = await response.json();
      
      const tableBody = document.getElementById('table-body');
      tableBody.innerHTML = ""; 

      data.data.forEach(country => {
          const zlote = country.gold_medals;

          const srebrne = country.silver_medals;

          const brazowe = country.bronze_medals;

          const row = `
              <tr>
                  <td>
                      <img src="${flagUrl}" alt="${countryId}" style="width: 20px; margin-right: 8px; vertical-align: middle;">
                      ${countryId}
                  </td>
                  <td>${totalMedals}</td>
                  <td>${ranking}</td>
              </tr>
          `;
          
          tableBody.insertAdjacentHTML('beforeend', row);
      });

      console.log("Tabela zaktualizowana o flagi z flag_url!");

  } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
  }
}