



function entregarDinero()
{
  var t = document.getElementById("dinero");
  
  dinero = parseInt(t.value);
  entregar.length=0;
  resultado.innerHTML= "";
  for(var bi of caja)
  {

            if(dinero > 0)
            {
            div = Math.floor(dinero / bi.valor);

            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push( new Billete(bi.nombre,bi.valor, papeles) );
            entregar.push( new Billete(bi.nombre,bi.valor, papeles) );
            dinero = dinero - (bi.valor * papeles);
            }

 }

  if(dinero > 0)

  {
    resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
  }

  else
  {
    for (en of entregar){

    for (var bi of caja){

      if(bi.valor == en.valor){

        bi.cantidad= bi.cantidad-en.cantidad;   
     
      }  
      
      
    }
  }
           
    
    
    
    
    for(var e of entregar)
            {
                        
                    if(e.cantidad > 0)
                    {
                            resultado.innerHTML += "<br>" + e.cantidad + " billetes de $" + e.valor + "<br >" ;
                            resultado.innerHTML += "<img src=" + e.imagen.src + " />";
                            
                    }
                    
            }
  }
  t.value="";
  console.log(caja);
  console.log(entregado)
}


var imagenes = [];
imagenes["cien"]= "cien.jpg";
imagenes["cincuenta"]= "cincuenta.jpg";
imagenes["veinte"]= "veinte.jpg";
imagenes["dies"]= "dies.jpg";
imagenes["cinco"]= "cinco.jpg";

var caja = [];
caja.push( new Billete("cien",100, 5) );
caja.push( new Billete("cincuenta",50, 10 ) );
caja.push( new Billete("veinte",20, 5) );
caja.push( new Billete("dies",10, 10) );
caja.push( new Billete("cinco",5, 5) );

var entregar = [];
var dinero = 0;
var div = 0;
var papeles = 0;

var entregado = [];

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);