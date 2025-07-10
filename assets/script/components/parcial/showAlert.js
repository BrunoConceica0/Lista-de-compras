function showAlert(message, type) {
  const alerta = document.getElementById("alerta");

  if (!alerta) return;

  alerta.classList.add("mostrar");

  // Estilo condicional (opcional)
  alerta.style.backgroundColor =
    type === "erro"
      ? "#ff3860"
      : type === "warning"
      ? "#ffdd57"
      : type === "success"
      ? "#48c774"
      : "#3273dc";

  alerta.style.color =
    type === "erro"
      ? "#fff"
      : type === "warning"
      ? "#000"
      : type === "success"
      ? "#fff"
      : "#fff";

  alerta.innerText = message;
  setTimeout(() => {
    alerta.classList.remove("mostrar");
  }, 5000); // 5 segundos
}
export default showAlert;
