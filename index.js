const BTN_JUEGO = document.getElementById('btnJuego');
const BTN_COLOR_VIOLETA = document.getElementById('btn__colorVioleta');
const BTN_COLOR_VERDE = document.getElementById('btn__colorVerde');
const BTN_COLOR_CELESTE = document.getElementById('btn__colorCeleste');
const BTN_COLOR_NARANJA = document.getElementById('btn__colorNaranja');

const nivelMaximo = 5;
let nivelActual = 0;
let verificador = true;
let secuenciaAletoria = generarSecuenciaAleatoria();

// variables que guardar el valor numerico de cada color
let violeta = 0;
let verde = 1;
let celeste = 2;
let naranja = 3;

BTN_JUEGO.addEventListener('click', () => {
   iniciarJuego();
});

function iniciarJuego() {
   BTN_JUEGO.classList.add('btnJuego--oculto');
   nuevoNivel();
}
function nuevoNivel() {
   nivelActual++;
   for (let i = 0; i < nivelActual; i++) {
      setTimeout(() => iluminarColor(secuenciaAletoria[i]), 1000 * i);
   }
   setTimeout(() => recibirSecuenciaUsuario(), 1000 * nivelActual);
}

function generarSecuenciaAleatoria() {
   let secuenciaAletoria = new Array(10);
   for (let i = 0; i < nivelMaximo; i++) {
      secuenciaAletoria[i] = Math.floor(Math.random() * 4);
   }
   return secuenciaAletoria;
}

function iluminarColor(colorIluminado) {
   if (colorIluminado == violeta) {
      BTN_COLOR_VIOLETA.classList.add('active');
   }
   if (colorIluminado == verde) {
      BTN_COLOR_VERDE.classList.add('active');
   }
   if (colorIluminado == celeste) {
      BTN_COLOR_CELESTE.classList.add('active');
   }
   if (colorIluminado == naranja) {
      BTN_COLOR_NARANJA.classList.add('active');
   }
   setTimeout(() => apagarColor(colorIluminado), 350);
}
function apagarColor(colorIluminado) {
   if (colorIluminado == violeta) {
      BTN_COLOR_VIOLETA.classList.remove('active');
   }
   if (colorIluminado == verde) {
      BTN_COLOR_VERDE.classList.remove('active');
   }
   if (colorIluminado == celeste) {
      BTN_COLOR_CELESTE.classList.remove('active');
   }
   if (colorIluminado == naranja) {
      BTN_COLOR_NARANJA.classList.remove('active');
   }
}

function recibirSecuenciaUsuario() {
   BTN_COLOR_VIOLETA.addEventListener('click', iluminarSecuenciaVi);
   BTN_COLOR_VERDE.addEventListener('click', iluminarSecuenciaVe);
   BTN_COLOR_CELESTE.addEventListener('click', iluminarSecuenciaCe);
   BTN_COLOR_NARANJA.addEventListener('click', iluminarSecuenciaNa);
}
function iluminarSecuenciaVi() {
   iluminarColor(violeta);
   guardarSecuenciaUsuario(violeta);
}
function iluminarSecuenciaVe() {
   iluminarColor(verde);
   guardarSecuenciaUsuario(verde);
}
function iluminarSecuenciaCe() {
   iluminarColor(celeste);
   guardarSecuenciaUsuario(celeste);
}
function iluminarSecuenciaNa() {
   iluminarColor(naranja);
   guardarSecuenciaUsuario(naranja);
}

let secuenciaUsuario = new Array(0);
function guardarSecuenciaUsuario(color) {
   if (secuenciaUsuario.length < nivelActual) {
      secuenciaUsuario.push(color);
   }
   if (secuenciaUsuario.length == nivelActual) {
      verificar();
   }
}
function verificar() {
   BTN_COLOR_VIOLETA.removeEventListener('click', iluminarSecuenciaVi);
   BTN_COLOR_VERDE.removeEventListener('click', iluminarSecuenciaVe);
   BTN_COLOR_CELESTE.removeEventListener('click', iluminarSecuenciaCe);
   BTN_COLOR_NARANJA.removeEventListener('click', iluminarSecuenciaNa);
   for (let i = 0; i < nivelActual; i++) {
      if (secuenciaUsuario[i] == secuenciaAletoria[i]) {
         verificador *= true;
      } else {
         verificador *= false;
      }
   }
   console.log(verificador)
   if (verificador) {
      if (nivelActual == nivelMaximo) {
         ganar();
      }
      else{
         nuevoNivel()
      }
   } 
   if(!verificador) {
      perder();
   }
}
function ganar() {
   console.log("ganar")
}
function perder() {
   console.log("perder")
}
