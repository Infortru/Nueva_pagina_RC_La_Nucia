//JavaScript
document.getElementById("boton-hamburguesa").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    var boton = document.getElementById("boton");
    if (menu.style.display === "none") {
        menu.style.display = "block";
        boton.textContent = "X cerrar";
    } else {
      menu.style.display = "none";
      boton.textContent = '\u2630' + " Menú";
    }
  });
