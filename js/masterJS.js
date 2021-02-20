function resaltarBoton(id) {
  const botonActual = document.getElementsByClassName("opcion_Categorias active");
  const botonElegido = document.getElementById(id);

  botonActual[0].classList.remove("active");
  botonElegido.classList.add("active");
}
