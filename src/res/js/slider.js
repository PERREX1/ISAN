var imagenes = [
    "res/img/imgslider/Imagen-Uno.jpg",
    "res/img/imgslider/Imagen-Dos.jpg",
    "res/img/imgslider/Imagen-Tres.jpg",
    "res/img/imgslider/Imagen-Cuatro.jpg"
   ];

document.Imagen.src = imagenes[0];

var SliderDerecha = document.querySelector(".slider-derecho")
var SliderIzquierda = document.querySelector(".slider-izquierdo")
var contador = 0;

function MoverDerecha()
{
contador++;
if (contador > imagenes.length -1)
{
contador=0
}
document.Imagen.src = imagenes[contador]
}

var Invervalo = setInterval(MoverDerecha, 2000);
SliderDerecha.addEventListener("click", function()
{
clearInterval (Invervalo);
MoverDerecha();
Invervalo = setInterval (MoverDerecha, 2000);
})

function MoverIzquierda(){
contador--;
if (contador < 0)
{
contador = imagenes.length - 1
}
document.Imagen.src = imagenes[contador]
}
SliderIzquierda.addEventListener("click", MoverIzquierda)