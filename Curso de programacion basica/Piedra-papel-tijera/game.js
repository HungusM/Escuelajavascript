var x = document.getElementById("rock");
var y=document.getElementById("paper");
var z=document.getElementById("cut");

var Piedra= 0;
var Papel= 1;
var Tijera= 2;

x.addEventListener("click",valores0)
    
function valores0(){
    var user= 0
console.log (user)
function juega (user){

    var cpu=Math.floor(Math.random()*3)
     
        if(user === Piedra && cpu === Tijera){
            alert ("el usuario GANO con Piedra ")
        
        }        
        else if(user === cpu){
            alert ("Empate")
        }
        else{
            alert ("La CPU Gano!!")
        }
}
juega(user);
}

y.addEventListener("click",valores1)
    
function valores1(){
    var user= 1
console.log (user)
function juega (user){

    var cpu=Math.floor(Math.random()*3)
     
       
        if(user === Papel && cpu === Piedra){
            alert ( "el usuario GANO con Papel" )
        }
        
        else if(user === cpu){
            alert ("Empate")
        }
        else{
            alert ("La CPU Gano!!")
        }
}
juega(user);
}

z.addEventListener("click",valores2)
    
function valores2(){
    var user= 2
console.log (user)
function juega (user){

    var cpu=Math.floor(Math.random()*3)
     
      
     if(user === Tijera && cpu === Papel){
            alert ("el usuario GANO con Tijera" )
        }
        else if(user === cpu){
            alert ("Empate")
        }
        else{
            alert ("La CPU Gano!!")
        }
} 
juega(user);
}





