let wszystkieDane = [];

function startstrony() {
    const body = document.body;
    
    body.innerHTML = `
        <header>
            <div id="zglos">Zglos blad</div>
            <div id="darkmode">Dark mode</div>
            <h1>Witam</h1>
        </header>

        <main>
            <form id="formularz-wyszukiwania">
                <label for="kraj">Kraj: </label>
                <input type="text" id="kraj" placeholder="np. POL">
                <input type="submit" value="Szukaj">
            </form>

            <table id="tabela-danych">
                <thead>
                    <tr>
                        <th>Kraj</th>
                        <th id="naglowek-medale">Medale <span id="strzalka">⬇️</span></th>
                        <th>Ranking</th>
                    </tr>
                </thead>
                <tbody id="table-body">
                    </tbody>
            </table>

            <div id="widok-szczegolow"></div>
        </main>
    `;
}

async function DaneApi() {
    try {
        const odpowiedz = await fetch('https://apis.codante.io/olympic-games/countries');
        const daneJson = await odpowiedz.json();
        
        wszystkieDane = daneJson.data;
        ZrobTabele(wszystkieDane);

    } catch (blad) {
        console.error("Błąd API:", blad);
        const tBody = document.getElementById('table-body');
        if(tBody) tBody.innerHTML = '<tr><td colspan="3">Błąd pobierania danych.</td></tr>';
    }
}

startstrony();
DaneApi();
