function WlaczDarkmode(){
const przycisk_darkmode = document.getElementById("darkmode");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("darkmode");
}

przycisk_darkmode.addEventListener('click', () => {
    document.body.classList.toggle("darkmode");
    const isDark = document.body.classList.contains("darkmode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});
}