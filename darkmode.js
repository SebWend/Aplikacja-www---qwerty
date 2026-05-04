const przycisk_darkmode=document.getElementById("darkmode")
przycisk_darkmode.addEventListener('click', (event) => {
    document.getElementsByTagName("body")[0].classList.toggle("darkmode")
})