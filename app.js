let wszystkieDane = []; 

function startstrony() {
    document.body.innerHTML = `
        <header>
            <div id="med" style="margin-bottom: 10px; font-weight: bold;"></div>
            <button id="zglos" class="przycisk-akcji" style="margin-bottom: 10px;">Zgłoś błąd</button>
            <button id="darkmode" class="przycisk-akcji" style="margin-bottom: 10px;">Dark mode</button>
            <h1>Klasyfikacja medalowa Letnich Igrzysk Olimpijskich 2024</h1>
        </header>

        <main>
            <form id="formularz-wyszukiwania" style="margin-bottom: 20px;">
                <label for="kraj">Kraj: </label>
                <input type="text" id="kraj" placeholder="np. POL" style="padding: 5px;">
                <input type="submit" value="Szukaj" class="przycisk-akcji" style="padding: 5px 15px;">
            </form>

            <table id="tabela-danych">
                <thead>
                    <tr>
                        <th>Kraj</th>
                        <th id="naglowek-medale" style="cursor: pointer; user-select: none;">Medale <span id="strzalka">⬇️</span></th>
                        <th>Ranking</th>
                    </tr>
                </thead>
                <tbody id="table-body">
                </tbody>
            </table>

            <div id="widok-szczegolow" style="display: none;"></div>
        </main>
    `;
}

function licz_medale(daneTabela) {
    let medale = daneTabela.reduce((suma, kraj) => suma + kraj.total_medals, 0);
    const div = document.getElementById("med");
    if(div) div.textContent = `Wszystkie medale zdobyte podczas igrzysk: ${medale}`;
}

async function DaneApi() {
    try {
        const odpowiedz = await fetch('https://apis.codante.io/olympic-games/countries');
        const daneJson = await odpowiedz.json();
        
        wszystkieDane = daneJson.data;
        ZrobTabele(wszystkieDane);
        licz_medale(wszystkieDane);

    } catch (blad) {
        console.error("Błąd API:", blad);
        const tBody = document.getElementById('table-body');
        if(tBody) tBody.innerHTML = '<tr><td colspan="3">Błąd pobierania danych z API.</td></tr>';
    }
}

startstrony();        
Wyszukiwanie();
Sortowanie();
RozpocznijZgloszenie();
WlaczDarkmode();
DaneApi();            