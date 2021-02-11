const btnIniciarJuego = document.getElementById('btnIniciarJuego');

btnIniciarJuego.addEventListener('click', () => {
   iniciarJuego();
});

function iniciarJuego() {
   var nivel = 1;
   btnIniciarJuego.classList.add('btnJuego--oculto');
   let secuencia = generarSecuencia();

   ilumicarSecuencia(secuencia, nivel);
}

function generarSecuencia() {
   let secuencia = new Array(10);
   for (let i = 0; i < 10; i++) {
      secuencia[i] = Math.random() * 4;
      secuencia[i] = Math.floor(secuencia[i]);
   }
   return secuencia;
}
function ilumicarSecuencia(secuencia, nivel) {
   const btnColorAzul = document.getElementById('colorAzul');
   const btnColorRojo = document.getElementById('colorRojo');
   const btnColorVerde = document.getElementById('colorVerde');
   const btnColorAmarillo = document.getElementById('colorAmarillo');

   function iluminar(color) {
      if (color == 0) {
         btnColorAzul.classList.add('active--colorAzul');
      } else if (color == 1) {
         btnColorRojo.classList.add('active--colorRojo');
      } else if (color == 2) {
         btnColorVerde.classList.add('active--colorVerde');
      } else if (color == 3) {
         btnColorAmarillo.classList.add('active--colorAmarillo');
      }
      setTimeout(() => apagarColor(color), 350)
   }
   function apagarColor(color){
      if (color == 0) {
         btnColorAzul.classList.remove('active--colorAzul');
      } else if (color == 1) {
         btnColorRojo.classList.remove('active--colorRojo');
      } else if (color == 2) {
         btnColorVerde.classList.remove('active--colorVerde');
      } else if (color == 3) {
         btnColorAmarillo.classList.remove('active--colorAmarillo');
      }
   }

   for (let i = 0; i < nivel; i++) {
      setTimeout(() => iluminar(secuencia[i]), 1000 * i);
   }
}
