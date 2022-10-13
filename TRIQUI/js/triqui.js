var tab = new Array();
var $turno =0;
var $bandera = false  ;
window.onload = function(){
    var iniciar =document.getElementById("iniciar");
    iniciar.addEventListener("click", comenzar)
}
function comenzar(){
    $bandera = true;
    var jugador1 = document.getElementById("jugador1");
    var jugador2 = document.getElementById("jugador");
    
    if (jugador1.value == ""){
        alert("Falta el nombre del jugador 1");
        jugador1.focus();
    }else if (jugador2.value == ""){
        alert("Falta el nombre del jugador 2");
        jugador2.focus(); 
    }else{
       tab[0] = document.getElementById("b0"); 
       tab[1] = document.getElementById("b1"); 
       tab[2] = document.getElementById("b2"); 
       tab[3] = document.getElementById("b3"); 
       tab[4] = document.getElementById("b4"); 
       tab[5] = document.getElementById("b5"); 
       tab[6] = document.getElementById("b6"); 
       tab[7] = document.getElementById("b7"); 
       tab[8] = document.getElementById("b8"); 
       for (let i = 0; i < tab.length; i++){
           tab[i].className = "botonInicial";
           tab[i].value = "I";
       }
       $turno = 1;
       document.getElementById(' turnojugador').innerHTML = 'adelante jugador 1'
       //document.getElementById("turnojugador").innerHTML = "Adelante jugador 1";

    }
}
function colocar(boton){
    if ($bandera == true){
        if ($turno == 1 && boton.value == "I"){
            $turno = 2;
            document.getElementById(" turnojugador").innerHTML = "Adelante jugador 1";
            boton.value = "X";
            boton.className  = "botonJugador1";
            }  
        else if ($turno == 2 && boton.value =="I"){
            $turno = 1;
            document.getElementById(" turnojugador").innerHTML = "Adelante jugador 2";
            boton.value = "O";
            boton.className ="botonJugador2";  
            console.log("O")   
        }
    }
    revisar();  
  
}
function revisar(){
    if((tab[0].value == "X" && tab[1].value == "X" && tab[2].value == "X")
    ||(tab[3].value == "X" && tab[4].value == "X" && tab[5].value == "X")
    ||(tab[6].value == "X" && tab[7].value == "X" && tab[8].value == "X")
    ||(tab[0].value == "X" && tab[3].value == "X" && tab[6].value == "X")
    ||(tab[1].value == "X" && tab[4].value == "X" && tab[7].value == "X")
    ||(tab[2].value == "X" && tab[5].value == "X" && tab[8].value == "X")
    ||(tab[0].value == "X" && tab[4].value == "X" && tab[8].value == "X")
    ||(tab[2].value == "X" && tab[4].value == "X" && tab[6].value == "X")){
        window.alert("Felicidades " +jugador1.value+", has ganado");
        $bandera= false;
    }
    if((tab[0].value == "O" && tab[1].value == "O" && tab[2].value == "O")
    ||(tab[3].value == "O" && tab[4].value == "O" && tab[5].value == "O")
    ||(tab[6].value == "O" && tab[7].value == "O" && tab[8].value == "O")
    ||(tab[0].value == "O" && tab[3].value == "O" && tab[6].value == "O")
    ||(tab[1].value == "O" && tab[4].value == "O" && tab[7].value == "O")
    ||(tab[2].value == "O" && tab[5].value == "O" && tab[8].value == "O")
    ||(tab[0].value == "O" && tab[4].value == "O" && tab[8].value == "O")
    ||(tab[2].value == "O" && tab[4].value == "O" && tab[6].value == "O")){
        window.alert("Felicidades " +jugador.value+", has ganado");
        $bandera= false;
    }
}

const reiniciar = document.getElementById('reiniciar')

