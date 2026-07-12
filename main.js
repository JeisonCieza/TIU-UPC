const reloj = document.querySelector('.reloj span');
const fecha = document.querySelector('.fecha');
function obtenerFechaHora() {
    const date = new Date();

    return {
        hora: date.getHours(),
        minutos: date.getMinutes(),
        segundos: date.getSeconds(),
        dia: capitalizarMayus(date.toLocaleDateString('es-ES', { weekday: 'long' })),
        mes: capitalizarMayus(date.toLocaleDateString('es-ES', { month: 'short' })),
        año: date.toLocaleDateString('es-ES', { year: 'numeric' }),
        diaSemana: capitalizarMayus(date.toLocaleDateString('es-ES', { day: 'numeric' })),

    }
}

function capitalizarMayus(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function actualizarReloj() {
    const { hora, minutos, segundos } = obtenerFechaHora()

    reloj.textContent = `${hora}:${minutos}:${segundos}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const { dia, mes, año, diaSemana } = obtenerFechaHora();
    fecha.innerHTML = `<p>${dia}, ${diaSemana} ${mes} ${año}</p>`;

    setInterval(actualizarReloj, 1000);
    actualizarReloj();
})

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("SW registrado"))
    .catch(console.error);
}

/* ARCHIVOS ANTIGUUOS
// const fecha = dato.toLocaleDateString('es-ES', {
//     weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'
// });


// function Capitalizar(texto) {
//     return texto.replace(/ de /g, ' ').replace(/(^|\s)\p{L}/gu, letra => letra.toUpperCase());
// }
*/