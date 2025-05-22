function atualizarRelogio() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
    document.getElementById('relogio').innerText = `${horas}:${minutos}:${segundos}`;
}
atualizarRelogio();
setInterval(atualizarRelogio, 1000);

let segundos = 0;
let intervalo;

function formatarTime(segundos) {
    const h = String(Math.floor(segundos / 3600)).padStart(2, '0');
    const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
    const s = String(segundos % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
}

function atualizarCronometro() {
    document.getElementById('cronometro').innerText = formatarTime(segundos);
}

function iniciar() {
    if (!intervalo) {
        intervalo = setInterval(() => {
            segundos++;
            atualizarCronometro();
        }, 1000);
    }
}