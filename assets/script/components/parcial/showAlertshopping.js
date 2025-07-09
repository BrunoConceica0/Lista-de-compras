function showAlertshopping() {
  const alerta = document.getElementById("alerta-adicionado");
  alerta.classList.add("mostrar");

  setTimeout(() => {
    alerta.classList.remove("mostrar");
  }, 5000); // 5 segundos
}
export default showAlertshopping;
