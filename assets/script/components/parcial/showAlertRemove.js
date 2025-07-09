function showAlert() {
  const alerta = document.getElementById("alerta-sucesso");
  alerta.classList.add("mostrar");

  setTimeout(() => {
    alerta.classList.remove("mostrar");
  }, 5000); // 5 segundos
}
export default showAlert;
