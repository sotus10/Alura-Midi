//Creamos la función que reproducirá el sonido
function playSonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('')

let contador = 0;

while (contador < 9) {
   listaDeTeclas[contador].onclick = playSonido; 
   contador = contador + 1;
   console.log('Vuelta' + contador)
}