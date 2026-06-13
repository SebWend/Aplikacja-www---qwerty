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

function Wyszukiwanie() {
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
}

function Sortowanie() {
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
}
