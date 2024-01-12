// En tu archivo scriptbtn.js
function mostrarFotos() {
    var galeriaFotos = document.getElementById("galeria-fotos");
    if (galeriaFotos.style.display === "none") {
        galeriaFotos.style.display = "flex";
    } else {
        galeriaFotos.style.display = "none";
    }
}
