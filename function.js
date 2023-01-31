document.getElementById ('boton').onclick=function(){
    console.log ("capturamos el evento click");
    document.getElementById ("boton"). innerHTML="Poseo buena capacidad para el trabajo en equipo, y el abordaje de múltiples tareas";
}
let readMore_btn = document.getElementById('readMore_btn');
let hideText = document.getElementById('hideText');

readMore_btn.addEventListener('click', toggleText);

function toggleText() {
  hideText.classList.toggle('showText');

  if(hideText.classList.contains('showText')) {
    readMore_btn.innerHTML = 'Leer menos'
  }
  else {
    readMore_btn.innerHTML = 'Leer más'
  }
}
