let wszystkieDane = [];

function startstrony() {
    const body = document.body;
    
    let header = document.createElement("header");
    body.appendChild(header);
    
    let div = document.createElement("div");
    header.appendChild(div);
    div.textContent = "Dark mode";
    div.id = "darkmode";
    
    let h1 = document.createElement("h1");
    h1.textContent = "Witam";
    header.appendChild(h1);
    
    let main = document.createElement("main");
    body.appendChild(main);
    

    let form = document.createElement("form");
    form.id = "formularz-wyszukiwania";
    form.style.marginBottom = "20px";
    main.appendChild(form);
    
    let label = document.createElement("label");
    label.htmlFor = "kraj";
    label.textContent = "Kraj: ";
    form.appendChild(label);
    
    let input1 = document.createElement("input");
    input1.type = "text";
    input1.id = "kraj";
    input1.placeholder = "np. POL";
    form.appendChild(input1);
    
    let input2 = document.createElement("input");
    input2.type = "submit";
    input2.value = "Szukaj";
    form.appendChild(input2);
    
    // Tabela
    let table = document.createElement("table");
    table.id = "tabela-danych";
    table.style.maxWidth = "1400px";
    table.style.margin = "0 auto";
    table.style.width = "100%";
    main.appendChild(table);
    
    let thead = document.createElement("thead");
    table.appendChild(thead);
    let tr = document.createElement("tr");
    thead.appendChild(tr);
    
    let th1 = document.createElement("th");
    th1.textContent = "Kraj";
    let th2 = document.createElement("th");
    th2.id = "naglowek-medale";
    th2.style.cursor = "pointer";
    th2.innerHTML = 'Medale <span id="strzalka">⬇️</span>';
    let th3 = document.createElement("th");
    th3.textContent = "Ranking";
    
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    
    let tbody = document.createElement("tbody");
    tbody.id = "table-body";
    table.appendChild(tbody);
    
    let detailsDiv = document.createElement("div");
    detailsDiv.id = "widok-szczegolow";
    detailsDiv.style.display = "none"; 
    detailsDiv.style.padding = "20px";
    main.appendChild(detailsDiv);
}

async function DaneApi() {
    try {
        const odpowiedz = await fetch('https://apis.codante.io/olympic-games/countries');
        const daneJson = await odpowiedz.json();
        
        wszystkieDane = daneJson.data;
        ZrobTabele(wszystkieDane);

    } catch (blad) {
        console.error("Błąd API:", blad);
        alert("Błąd podczas pobierania danych. Odśwież stronę.");
    }
}

// URUCHOMIENIE
startstrony();
DaneApi();
