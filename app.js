// 1 TABELE
function ZrobTabele(daneTabela) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ""; 

    daneTabela.forEach(kraj => {
        const wiersz = document.createElement('tr');
        wiersz.style.cursor = "pointer"; 
        
        wiersz.innerHTML = `
            <td>
                <img src="${kraj.flag_url}" class="flaga-tabela">
                ${kraj.id.toUpperCase()}
            </td>
            <td>${kraj.total_medals}</td>
            <td>${kraj.rank}</td>
        `;
        
        wiersz.addEventListener('click', () => pokazSzczegoly(kraj));
        tableBody.appendChild(wiersz);
    });
}

// 2 DOKLADNE MEDALE PO KRAJU
function pokazSzczegoly(kraj) {
    const tabela = document.getElementById('tabela-danych');
    const formularz = document.getElementById('formularz-wyszukiwania');
    const widok = document.getElementById('widok-szczegolow');

    tabela.style.display = 'none';
    formularz.style.display = 'none';
    widok.style.display = 'block';

    widok.innerHTML = `
        <h2>${kraj.id.toUpperCase()}</h2>
        <img src="${kraj.flag_url}" class="flaga-szczegoly">
        <p>🥇 Złoto: ${kraj.gold_medals} | 🥈 Srebro: ${kraj.silver_medals} | 🥉 Brąz: ${kraj.bronze_medals}</p>
        <p><strong>Suma medali: ${kraj.total_medals}</strong></p>
        <button id="przycisk-powrot" class="przycisk-akcji">Powrót</button>
    `;

    document.getElementById('przycisk-powrot').addEventListener('click', () => {
        widok.style.display = 'none';
        tabela.style.display = 'table';
        formularz.style.display = 'block';
    });
}

// 3 WYSZUKIWANIE 
const formularz = document.getElementById("formularz-wyszukiwania");

if (formularz) {
    formularz.addEventListener("submit", (event) => {
        event.preventDefault(); 
        
        const wpisanyKraj = document.getElementById("kraj").value.trim().toLowerCase();
        
        if (wpisanyKraj === "") {
            alert("Musisz wpisać nazwę kraju!");
            return ZrobTabele(wszystkieDane); 
        }

        const przefiltrowane = wszystkieDane.filter(kraj => 
            kraj.id.toLowerCase().includes(wpisanyKraj)
        );
        
        ZrobTabele(przefiltrowane);
    });
}

// 4 SORTOWANIE
const przyciskMedale = document.getElementById("naglowek-medale");
const ikonkaStrzalki = document.getElementById("strzalka");
const Tabela = document.getElementById("table-body"); 

let czySortowacMalejaco = true;

przyciskMedale.addEventListener("click", function() {
    
    const listaWierszy = Array.from(Tabela.querySelectorAll("tr"));

    listaWierszy.sort(function(wierszA, wierszB) {
        const medaleA = parseInt(wierszA.querySelectorAll("td")[1].innerText);
        const medaleB = parseInt(wierszB.querySelectorAll("td")[1].innerText);

        if (czySortowacMalejaco) {
            return medaleB - medaleA; 
        } else {
            return medaleA - medaleB; 
        }
    });

    listaWierszy.forEach(wiersz => Tabela.appendChild(wiersz));

    if (czySortowacMalejaco) {
        ikonkaStrzalki.innerText = "⬇️";         
        czySortowacMalejaco = false;             
    } else {
        ikonkaStrzalki.innerText = "⬆️";          
        czySortowacMalejaco = true;              
    }
});

// 5 DARKMODE
const przycisk_darkmode = document.getElementById("darkmode");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("darkmode");
}

przycisk_darkmode.addEventListener('click', () => {
    document.body.classList.toggle("darkmode");
    const isDark = document.body.classList.contains("darkmode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// 6 ZGLASZANIE BLEDOW

function Zglos_blad(){
    const tabela = document.getElementById('tabela-danych');
    const formularz = document.getElementById('formularz-wyszukiwania');
    const widok = document.getElementById('widok-szczegolow');

    tabela.style.display = 'none';
    formularz.style.display = 'none';
    widok.style.display = 'block';

    widok.innerHTML = `
        <form method="post">
            <input type="text" placeholder="imie" id="imie" required="true"><br>
            <input type="text" placeholder="nazwisko" id="nazwisko" required="true"><br>
            <input type="email" placeholder="email" id="email" required="true"><br>
            <textarea id="zgloszenie" placeholder="zgloszenie" name="zgloszenie" rows="5" cols="21" required="true"></textarea><br>
            <input type="submit" value="ok"></input>
        </form>
    `;
    const input = document.getElementById("zgloszenie");
    const imie = document.getElementById("imie");
    const nazwisko = document.getElementById("nazwisko");
    const email = document.getElementById("email");
}

const przycisk_zglos=document.getElementById("zglos");

przycisk_zglos.addEventListener('click', () => {
    Zglos_blad();
});

// 7 WSZYSTKIE MEDALE
function licz_medale(daneTabela){
    let medale=0;
    wszystkieDane.forEach(kraj => {
        medale=medale+kraj.total_medals;
    });
    div=document.getElementById("med");
    div.textContent=`Wszystkie medale:  ${medale}`;
}