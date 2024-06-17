function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

for(let contador = 0; contador < listaDeTeclas.length; contador = contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
 
    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)
 
    tecla.onclick = function (){
     playSonido(idAudio);
    }; 

    contador = contador + 1;

    tecla.onkeydown = function(){
        if ('espacio') {
            
        } else {
            
        }
        tecla.classList.add('activa');
        
        tecla.onkeyup = function(){
            tecla.classList.remove('activa');
        }
    }
}
