var Papel = document.getElementById("Paper");
var Lienzo = Papel.getContext("2d");
var color = document.getElementById("colorsito")
var boton= document.getElementById("botoncito")

boton.addEventListener("click", reseteo)

Papel.addEventListener("mousedown", dibujarMouse)
Papel.addEventListener("mousemove", dibujarPresionado)
Papel.addEventListener("mouseup", nodibujarMouse)




var Xi;
var Yi;
var estado;

function dibujarMouse (Click) {
   
    Yi= Click.layerY; 
    Xi= Click.layerX;  
    estado=1;       
}

function dibujarPresionado(evento){
        
    if(estado == 1) {
    dibujarLinea(color.value, Xi , Yi , evento.layerX, evento.layerY);
   Xi= evento.layerX;
   Yi= evento.layerY;
   console.log("esta funcionando")
    }       

}


function nodibujarMouse (){
    estado = 0;
}


function dibujarLinea ( color, xinicial, yinicial, xfinal, yfinal ){
        Lienzo.beginPath()
        Lienzo.lineWidth = 1;
        Lienzo.strokeStyle = color;
        Lienzo.moveTo(xinicial, yinicial);
        Lienzo.lineTo(xfinal, yfinal);
        Lienzo.stroke ();
        Lienzo.closePath();
}


function reseteo () {
    
    Lienzo.clearRect(0, 0, Papel.width, Papel.height);
}