const przyciskMedale = document.getElementById("naglowek-medale");
const ikonkaStrzalki = document.getElementById("strzalka");
const Tabela = document.querySelector("tbody"); 

let czySortowacMalejaco = true;

przyciskMedale.addEventListener("click", function() {
    
    const listaWierszy = Array.from(Tabela.querySelectorAll("tr"));

    listaWierszy.sort(function(wierszA, wierszB) {
         
      const medaleA = parseInt(wierszA.querySelectorAll("td")[1].innerText);
      const medaleB = parseInt(wierszB.querySelectorAll("td")[1].innerText);

        if (czySortowacMalejaco === true) {
            return medaleB - medaleA; 
        } else {
            return medaleA - medaleB; 
        }
});

    listaWierszy.forEach(wiersz => Tabela.appendChild(wiersz));

    if (czySortowacMalejaco === true) {
        ikonkaStrzalki.innerText = "⬇️";         
        czySortowacMalejaco = false;             
    } else {
        ikonkaStrzalki.innerText = "⬆️";          
        czySortowacMalejaco = true;              
    }
});