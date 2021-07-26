class Billete
{
  constructor(z, v, c)
  {
    this.imagen = new Image();
    this.nombre = z
    this.valor = v;
    this.cantidad = c;   

    this.imagen.src = imagenes[this.nombre];
  }
  mostrar(){
      
  }
}