function Zglos_blad(){
    const tabela = document.getElementById('tabela-danych');
    const formularz = document.getElementById('formularz-wyszukiwania');
    const widok = document.getElementById('widok-szczegolow');

    tabela.style.display = 'none';
    formularz.style.display = 'none';
    widok.style.display = 'block';

    widok.innerHTML = `
        <h2>Menu zgłaszania błędu</h2>
        <input type="text" placeholder="imie" id="imie"><br>
        <input type="text" placeholder="nazwisko" id="nazwisko"><br>
        <input type="email" placeholder="email" id="email"><br>
        <textarea id="zgloszenie" placeholder="zgloszenie" rows="20" cols="35"></textarea><br>
        <button id="btn">Wyślij zgłoszenie</button><br>
        <button id="powrot">Powrót</button>
        <h1 id="out"></h1>
    `;
    let output = document.getElementById("out");
    document.getElementById("powrot").onclick = function () {
        widok.style.display = 'none';
        tabela.style.display = 'table';
        formularz.style.display = 'block';
    }
    document.getElementById("btn").onclick = function () {
        let input = document.getElementById("zgloszenie").value;
        let imie = document.getElementById("imie").value;
        let nazwisko = document.getElementById("nazwisko").value;
        let email = document.getElementById("email").value;
        if(input === "" || imie === "" || nazwisko === "" || email === ""){
            alert("Wypełnij wszystkie pola!");
        }else{
            if(!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))){
                alert("niepoprawny email!");
            }else{
                output.textContent = "Dziekujemy za zgloszenie";
                setTimeout(() => {
                    widok.style.display = 'none';
                    tabela.style.display = 'table';
                    formularz.style.display = 'block';
                }, 1000);
            }
        }
    }
}

function RozpocznijZgloszenie(){
const przycisk_zglos=document.getElementById("zglos");

przycisk_zglos.addEventListener('click', () => {
    Zglos_blad();
});
}
