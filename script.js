function atualizarRelogio() {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, "0");
  const minutos = agora.getMinutes().toString().padStart(2, "0");
  const segundos = agora.getSeconds().toString().padStart(2, "0");
  document.getElementById(
    "relogio"
  ).innerText = `${horas}:${minutos}:${segundos}`;
}
atualizarRelogio();
setInterval(atualizarRelogio, 1000);

let segundos = 0;
let intervalo;

function formatarTime(segundos) {
  const h = String(Math.floor(segundos / 3600)).padStart(2, "0");
  const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
  const s = String(segundos % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function atualizarCronometro() {
  document.getElementById("cronometro").innerText = formatarTime(segundos);
}

function iniciar() {
  if (!intervalo) {
    intervalo = setInterval(() => {
      segundos++;
      atualizarCronometro();
    }, 1000);
    document.getElementById("iniciar").innerText = "Iniciar";
    document.getElementById("iniciar").disabled = true;
  }
}

function pausar() {
  if (intervalo) {
    clearInterval(intervalo);
    intervalo = null;
    document.getElementById("pausar").innerText = "Retomar";
    document.getElementById("iniciar").disabled = true;
  } else {
    iniciar();
    document.getElementById("pausar").innerText = "Pausar";
  }
}

function zerar() {
  clearInterval(intervalo);
  intervalo = null;
  segundos = 0;
  atualizarCronometro();
  document.getElementById("iniciar").innerText = "Iniciar";
  document.getElementById("pausar").innerText = "Pausar";
  document.getElementById("iniciar").disabled = false;
}
