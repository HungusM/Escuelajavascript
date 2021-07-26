var peso = document.getElementById("valor");
var Mars = document.getElementById("1");
var Jupit = document.getElementById("2");

Mars.addEventListener( "click", calcular1 )
Jupit.addEventListener("click", calcular2)


function calcular1 (  ){
var a = peso.value
var result1 = a * 3.721 / 9.8 ;
alert ("tu peso en marte es " + parseInt(result1) + "kg " );
}

function calcular2 (  ){
    var a = peso.value
    var result2 = a * 24.79 / 9.8 ;
    alert ("tu peso en Jupiter es " + parseInt(result2) + "kg " );
    }