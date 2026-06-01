function onlaunch() {
    const body = document.body;
    
    body.innerHTML = `
        <header>
            <div id="darkmode">dark mode</div>
            <h1>Witam</h1>
            <nav></nav>
        </header>

        <form method="post" id="form-kraj">
            <label for="kraj">Kraj:</label>
            <input type="text" id="kraj" name="kraj">
            <input type="submit" value="Prześlij">
        </form>

        <main>
            <table id="myTable">
                <thead>
                    <tr>
                        <th>Kraj</th>
                        <th id="naglowek-medale">Medale <span id="strzalka">↕️</span></th>
                        <th>Ranking</th>
                    </tr>
                </thead>
                <tbody id="table-body"></tbody>
            </table>
        </main>

        <footer></footer>
    `;
}

onlaunch();
