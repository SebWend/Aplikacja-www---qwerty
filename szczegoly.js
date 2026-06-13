function zmienWidok(czyPokazacSzczegoly) {
    document.getElementById('tabela-danych').style.display = czyPokazacSzczegoly ? 'none' : 'table';
    document.getElementById('formularz-wyszukiwania').style.display = czyPokazacSzczegoly ? 'none' : 'block';
    document.getElementById('widok-szczegolow').style.display = czyPokazacSzczegoly ? 'block' : 'none';
}

function przygotujDane(kraj) {
    const ogolem = kraj.total_medals || 1; 
    const polskaNazwa = slownikKrajow[kraj.id.toLowerCase()] || kraj.name;

    return {
        procentZ: Math.round((kraj.gold_medals / ogolem) * 100),
        procentS: Math.round((kraj.silver_medals / ogolem) * 100),
        procentB: Math.round((kraj.bronze_medals / ogolem) * 100),
        Top10: kraj.rank <= 10 ? '🔥 TOP 10' : '',
        polskaNazwa: polskaNazwa,
        wikiUrl: `https://pl.wikipedia.org/w/index.php?search=${encodeURIComponent(polskaNazwa + " na Letnich Igrzyskach Olimpijskich")}`
    };
}

function generujPasekMedali(ikona, nazwa, medale, procent, klasaKoloru) {
    return `
        <div class="wiersz-medali">
            <span>${ikona} ${nazwa}: <strong>${medale}</strong></span>
            <span>${procent}%</span>
        </div>
        <div class="pasek-postepu-tlo"><div class="pasek-postepu-wypelnienie ${klasaKoloru}" style="width: ${procent}%"></div></div>
    `;
}

function generujKarteSzczegolow(kraj, dane) {
    return `
        <div class="karta-szczegolow">
            <h2 style="margin-top:0;"><img src="${kraj.flag_url}" width="40" style="vertical-align: middle;"> ${dane.polskaNazwa} (${kraj.id.toUpperCase()})</h2>
            <p>Miejsce w rankingu: <strong>#${kraj.rank}</strong> ${dane.Top10}</p>
            <hr>

            ${generujPasekMedali('🥇', 'Złote', kraj.gold_medals, dane.procentZ, 'pasek-zloto')}
            ${generujPasekMedali('🥈', 'Srebrne', kraj.silver_medals, dane.procentS, 'pasek-srebro')}
            ${generujPasekMedali('🥉', 'Brązowe', kraj.bronze_medals, dane.procentB, 'pasek-braz')}

            <h3>Razem medali: ${kraj.total_medals}</h3>
            <br>
            <a href="${dane.wikiUrl}" target="_blank">
                <button class="przycisk-akcji">📖 Wikipedia</button>
            </a>
            <button id="przycisk-powrot" class="przycisk-akcji">Powrót</button>
        </div>
    `;
}

function pokazSzczegoly(kraj) {
    zmienWidok(true); 
    const dane = przygotujDane(kraj); 
    
    const widok = document.getElementById('widok-szczegolow');
    widok.innerHTML = generujKarteSzczegolow(kraj, dane); 
    
    const przyciskPowrot = document.getElementById('przycisk-powrot');

    przyciskPowrot.onclick = () => {
        zmienWidok(false); 
    };
}