var lienzo =document.getElementById("villaplatzi");
var papel=lienzo.getContext("2d");






/*otra forma de cargar imagenes es 
var fondo = new image();
fondo.src= "magenes/tile.png"


*/

/*fondo*/
var fondo= {
url : "imagenes/tile.png",
cargaok: false,
}

fondo.imagen= new Image();
fondo.imagen.src= fondo.url;
fondo.imagen.addEventListener("load", cargarImagenes)




/*vaca*/
var vaca= {
    url : "imagenes/vaca.png",
    cargaok: false,
    }
    
    vaca.imagen= new Image();
    vaca.imagen.src= vaca.url;
    vaca.imagen.addEventListener("load", cargarvacas)

 /*cerdo*/
var cerdo= {
    url : "imagenes/cerdo.png",
    cargaok: false,
    }
    
    cerdo.imagen= new Image();
    cerdo.imagen.src= cerdo.url;
    cerdo.imagen.addEventListener("load", cargarImagenes)
    


/*pollo*/
var pollo= {
    url : "imagenes/pollo.png",
    cargaok: false,
    }
    
    pollo.imagen= new Image();
    pollo.imagen.src= pollo.url;
    pollo.imagen.addEventListener("load", cargarImagenes)


var  cantidadv= posicionX (1,15);

var  cantidadp= posicionX (1,9);

var a = 0;
var b = 0;

var xvacas = new Array ();
var yvacas =new Array ();

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };
  

console.log("cantidad de pollos "+ cantidadp );
console.log("cantidad de vacas "+cantidadv);  


/*funciones*/   

function cargarvacas (){

    for (var v = 0; v < cantidadv; v++ )
    {

        var x =posicionX (1, 6);
        var y =posicionY (1,6);   
        x= x* 70
        y= y* 70
        xvacas[v] = x;
        yvacas[v] = y;      
        
        }  
        
        cargarImagenes();
    }



function dibujarvacas (){
    for (var v = 0; v < cantidadv; v++ )
    {
        papel.drawImage(vaca.imagen, xvacas[v], yvacas[v] ); 
    }
}
    
    
function cargarImagenes (){
    fondo.cargaok=true;
    vaca.cargaok=true;
    cerdo.cargaok=true;
    pollo.cargaok=true;     
        

        if(fondo.cargaok){
            papel.drawImage(fondo.imagen, 0, 0)          
        }       

        if(cerdo.cargaok){

            papel.drawImage(cerdo.imagen, a, b)    
        }   

        if(vaca.cargaok){ 

            dibujarvacas();
                       
        }

        if(pollo.cargaok){
            for (var p = 0; p < cantidadp; p++ ){
            var alfa =posicionX (1, 8);
            var beta =posicionY (1, 8);
            alfa = alfa * 60;
            beta = beta * 60;
            papel.drawImage(pollo.imagen, alfa , beta )   
            }    
        }
                  
}

document.addEventListener("keydown", cerdoTeclas)


    function cerdoTeclas (eventos){
    var movimiento = 5;

    if (eventos.keyCode == teclas.UP){
        papel.drawImage(fondo.imagen, 0, 0)
        dibujarvacas();
        papel.drawImage(cerdo.imagen, a, b - movimiento);
        b= b - movimiento;
    }

    if (eventos.keyCode == teclas.DOWN){
        papel.drawImage(fondo.imagen, 0, 0)
        dibujarvacas(); 
        papel.drawImage(cerdo.imagen, a, b + movimiento);
        b= b + movimiento;
    }

    if (eventos.keyCode == teclas.LEFT){
        papel.drawImage(fondo.imagen, 0, 0) 
        dibujarvacas();
        papel.drawImage(cerdo.imagen, a - movimiento, b);
        a= a - movimiento;
    }

    if (eventos.keyCode == teclas.RIGHT){
        papel.drawImage(fondo.imagen, 0, 0) 
        dibujarvacas();
        papel.drawImage(cerdo.imagen, a + movimiento, b );
        a= a + movimiento;
    }
}

function posicionX( min, maxi){
  
     var posi;
     posi = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return posi;
}

function posicionY( min, maxi){

    var posf;
    posf = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return posf;
}

////////////////////////////////////////////////////
/*

document.addEventListener("keydown", cerdoTeclas)

var lienzo =document.getElementById("villaplatzi");
var papel=lienzo.getContext("2d");

otra forma de cargar imagenes es 
var fondo = new image();
fondo.src= "magenes/tile.png"


fondo
var fondo= {
url : "imagenes/tile.png",
cargaok: false,
}

fondo.imagen= new Image();
fondo.imagen.src= fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);


/*vaca
var vaca= {
    url : "imagenes/vaca.png",
    cargaok: false,
    }
    
    vaca.imagen= new Image();
    vaca.imagen.src= vaca.url;
    vaca.imagen.addEventListener("load", cargarVacas)

 /*cerdo
var cerdo= {
    url : "imagenes/cerdo.png",
    cargaok: false,
    }
    
    cerdo.imagen= new Image();
    cerdo.imagen.src= cerdo.url;
    cerdo.imagen.addEventListener("load", cargarCerdo)
    


/*pollo
var pollo= {
    url : "imagenes/pollo.png",
    cargaok: false,
    }
    
    pollo.imagen= new Image();
    pollo.imagen.src= pollo.url;
    pollo.imagen.addEventListener("load", cargarImagenes)*/

/*variables
var xvaca = new Array();
var yvaca = new Array();
var  cantidadv= posicionX (1,15);
var  cantidadp= posicionX (1,9);

var a = 0;
var b = 0;

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };
  

console.log("cantidad de pollos "+ cantidadp );
console.log("cantidad de vacas "+cantidadv);  


/*funciones*/   
    
/*function cargarImagenes (){
    fondo.cargaok=true;
    vaca.cargaok=true;
    cerdo.cargaok=true;
    pollo.cargaok=true;     

        if(fondo.cargaok){
            papel.drawImage(fondo.imagen, 0, 0)          
        }       

        if(cerdo.cargaok){

            papel.drawImage(cerdo.imagen, a, b)    
        }   

        

        if(pollo.cargaok){
            for (var v = 0; v < cantidadp; v++ ){
            var alfa =posicionX (1, 8);
            var beta =posicionY (1, 8);
            alfa = alfa * 60;
            beta = beta * 60;
            papel.drawImage(pollo.imagen, alfa , beta )   
            }    
        }
          
}

function cargarvacas (){
    for (var v = 0; v < cantidadv; v++ ){            
        var x = posicionX(1,6)
        var y = posicionY(1,6);  
        x= x* 70
        y= y* 70  
        papel.drawImage(vaca.imagen, x, y);   
        
        }           
       
}*/


///////////Funciones que cargan las imagenes/////////
/*function cargarFondo()
{
  fondo.cargaok = true;
  dibujar();
}

function cargarCerdo()
{
  cerdo.cargaok = true;
  dibujar();
}

var cantidad = posicionX(3, 8);
function cargarVacas()
{
  vaca.cargaok = true;
  for(var v = 0; v < cantidad; v++)
  {
    var x = posicionX(0, 7);
    var y = posicionY(0, 7);
    x = x*60;
    y = y*60;
    xvaca[v] = x;
    yvaca[v] = y;
    conmso
  }
  dibujar();
}
//////////////Funcion que dibuja las imagenes/////
function dibujar()
{
  if (fondo.cargaok)
  {
    papel.drawImage(fondo.imagen, 0,0);
  }
  if (cerdo.cargaok)
  {
    papel.drawImage(cerdo.imagen, a, b);
  }
  if (vaca.cargaok)
  {
    dibujarLobos();
  }
}

function dibujarLobos()
{
  for(var v=0; v<cantidad; v++){
    papel.drawImage(vaca.imagen, xvaca[v], yvaca[v]);
  }
}



    function cerdoTeclas (eventos){
    var movimiento = 5;

    if (eventos.keyCode == teclas.UP){
        papel.drawImage(fondo.imagen, 0, 0)
        dibujarLobos() 
        papel.drawImage(cerdo.imagen, a, b - movimiento);
        b= b - movimiento;
    }

    if (eventos.keyCode == teclas.DOWN){
        papel.drawImage(fondo.imagen, 0, 0)
        dibujarLobos()  
        papel.drawImage(cerdo.imagen, a, b + movimiento);
        b= b + movimiento;
    }

    if (eventos.keyCode == teclas.LEFT){
        papel.drawImage(fondo.imagen, 0, 0) 
        dibujarLobos() 
        papel.drawImage(cerdo.imagen, a - movimiento, b);
        a= a - movimiento;
    }

    if (eventos.keyCode == teclas.RIGHT){
        papel.drawImage(fondo.imagen, 0, 0) 
        dibujarLobos() 
        papel.drawImage(cerdo.imagen, a + movimiento, b );
        a= a + movimiento;
    }
}

function posicionX( min, maxi){
  
     var posi;
     posi = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return posi;
}

function posicionY( min, maxi){

    var posf;
    posf = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return posf;
}

 */