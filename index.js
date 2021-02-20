const BTN_JUEGO = document.getElementById('btnJuego');
const BTN_COLOR_VIOLETA = document.getElementById('btn__colorVioleta');
const BTN_COLOR_VERDE = document.getElementById('btn__colorVerde');
const BTN_COLOR_CELESTE = document.getElementById('btn__colorCeleste');
const BTN_COLOR_NARANJA = document.getElementById('btn__colorNaranja');
const nivelMaximo = 10;

let nivelActual = 1;
let colorANumero = {
   violeta: 0,
   verde: 1,
   celeste: 2,
   naranja: 3,
};


BTN_JUEGO.addEventListener('click', () => {
   console.log('Juego Iniciado');
   iniciarJuego();
});

function iniciarJuego() {
   BTN_JUEGO.classList.add('btnJuego--oculto');
   let secuenciaAletoria = generarSecuenciaAleatoria();
   mostrarSecuencia(secuenciaAletoria);
   console.log(secuenciaAletoria);
}

function generarSecuenciaAleatoria() {
   let secuenciaAletoria = new Array(10);
   for (let i = 0; i < nivelMaximo; i++) {
      secuenciaAletoria[i] = Math.floor(Math.random() * 4);
   }
   return secuenciaAletoria;
}

function mostrarSecuencia(secuenciaAletoria) {
   for (let i = 0; i < nivelActual; i++) {
      setTimeout(() => iluminarColor(secuenciaAletoria[i]), 1000 * i);
   }
}
function iluminarColor(colorIluminado) {
   if (colorIluminado == colorANumero.violeta) {
      BTN_COLOR_VIOLETA.classList.add('active');
   }
   if (colorIluminado == colorANumero.verde) {
      BTN_COLOR_VERDE.classList.add('active');
   }
   if (colorIluminado == colorANumero.celeste) {
      BTN_COLOR_CELESTE.classList.add('active');
   }
   if (colorIluminado == colorANumero.naranja) {
      BTN_COLOR_NARANJA.classList.add('active');
   }
   setTimeout(() => apagarColor(colorIluminado), 350);
}
function apagarColor(colorIluminado) {
   if (colorIluminado == colorANumero.violeta) {
      BTN_COLOR_VIOLETA.classList.remove('active');
   }
   if (colorIluminado == colorANumero.verde) {
      BTN_COLOR_VERDE.classList.remove('active');
   }
   if (colorIluminado == colorANumero.celeste) {
      BTN_COLOR_CELESTE.classList.remove('active');
   }
   if (colorIluminado == colorANumero.naranja) {
      BTN_COLOR_NARANJA.classList.remove('active');
   }
}
