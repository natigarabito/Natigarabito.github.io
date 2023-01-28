function mostrarTexto() {
    var checkBox = document.getElementById("myCheck");
    var texto = document.getElementById("texto");
    if (checkBox.checked == true) {
        texto.style.display = "block";
    } else {
       texto.style.display = "none";
    }
}