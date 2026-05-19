function onlaunch(){
    const body=document.getElementsByTagName("body")[0]
    let header=document.createElement("header")
    body.appendChild(header)
    
    let div=document.createElement("div")
        header.appendChild(div)
    let h1=document.createElement("h1")
        header.appendChild(h1)
    let nav=document.createElement("nav")
        header.appendChild(nav)
    
    div.textContent="dark mode"
    h1.textContent="Witam"
    div.align="left"
    div.id="darkmode"
    div.style="max-width: 5%; cursor: pointer;"
    
    let form=document.createElement("form")
        body.appendChild(form)
        form.method="post"
    let label=document.createElement("label")
        form.appendChild(label)
        label.for="kraj"
        label.textContent="Kraj:"
    let input1=document.createElement("input")
        form.appendChild(input1)
    let input2=document.createElement("input")
        form.appendChild(input2)
    
        input1.type="text"
        input1.name="kraj"
        input1.id="kraj"
        input2.type="submit"
    let main=document.createElement("main")
        body.appendChild(main)
    let table=document.createElement("table")
        body.appendChild(table)
        table.id="myTable"
        table.Maxwidth="1400 px"
        table.align="center"
    let thead=document.createElement("thead")
        table.appendChild(thead)
    let tr=document.createElement("tr")
        thead.appendChild(tr)
    let th1=document.createElement("th")
    let th2=document.createElement("th")
    let th3=document.createElement("th")
        tr.appendChild(th1)
        tr.appendChild(th2)
        tr.appendChild(th3)
    
    th1.textContent="Kraj"
    th2.id="naglowek-medale"
    th2.style="cursor: pointer;"
    th2.innerHTML='Medale <span id="strzalka">↕️</span>'
    th3.textContent="Ranking"
    let tbody=document.createElement("tbody")
        table.appendChild(tbody)
        tbody.id="table-body"
    let footer=document.createElement("footer")
        body.appendChild(footer)
    
}

onlaunch();