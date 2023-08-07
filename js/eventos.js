var alertaON = false;

document.getElementById("boton").addEventListener("click", function() {
    alert("Hola!");
    alertaON = true;
})

document.getElementById("alertboton").addEventListener("click", function() {
    if(alertaON == false){
        alert("Hola! Soy el div");    
    } else {
        alertaON = false;
    }
    
})
