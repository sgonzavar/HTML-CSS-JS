const ruleta = document.querySelector("#ruleta");

ruleta.addEventListener("click",girar);

let jugadorActivo = 0
let jugadores = [
    {
        nombre: 'Jugador 1',
        dinero: 10000
    },
    {
        nombre: 'Jugador 2',
        dinero: 10000
    },
    {
        nombre: 'Jugador 3',
        dinero: 10000
    },
    {
        nombre: 'Jugador 4',
        dinero: 10000
    }
]

function girar(){
    var betMoney = Number(prompt("¿Cuanto dinero deseas apostar?", 10));
    if (jugadores[jugadorActivo].dinero >= 10) {
    	let rand = Math.random()*7200; 
    	sumarPuntos(betMoney*(-1));
        calcular(rand);
    }  
    else {
    	alert("no te queda suficiente dinero");
    }
}
function sumarPuntos(p){
    jugadores[jugadorActivo].dinero += p;
    document.querySelector("#jugador").innerHTML = "Jugador: " + jugadores[jugadorActivo].nombre;
    document.querySelector("#dinero").innerHTML = "Dinero: $" + jugadores[jugadorActivo].dinero + "COP";
}

function calcular(rand){
    valor = rand / 360;
    valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
    ruleta.style.transform = "rotate("+rand+"deg)";
    setTimeout(()=>{
    switch(true){
    	case valor > 0 && valor <= 45:
            alert("Has ganado y te has llevado 500 COP");            
            sumarPuntos(500);
            jugadorActivo = (jugadorActivo+1)%4
    	    break;
    	case valor > 45 && valor <= 90:
    	    alert("Has ganado 20 COP");
            sumarPuntos(20);
            jugadorActivo = (jugadorActivo+1)%4
    	    break;
        case valor > 90 && valor <= 135:
            alert("has sumado 5 puntos");
            sumarPuntos(5);
            jugadorActivo = (jugadorActivo+1)%4
            break; 
        case valor > 135 && valor <= 180:
            alert("has sumado 50 puntos");
            sumarPuntos(50);
            jugadorActivo = (jugadorActivo+1)%4
            break;
        case valor > 180 && valor <= 225:
            alert("has sumado 100 puntos");
            sumarPuntos(100);
            jugadorActivo = (jugadorActivo+1)%4
            break;
        case valor > 225 && valor <= 270:
            alert("No has sumado puntos");
            jugadorActivo = (jugadorActivo+1)%4
            break;
        case valor > 270 && valor <= 315:
            alert("has sumado 70 puntos");
            sumarPuntos(70);
            jugadorActivo = (jugadorActivo+1)%4
            break;
        case valor > 315 && valor <= 360:
            alert("Has sumado 10 puntos");
            sumarPuntos(10);
            jugadorActivo = (jugadorActivo+1)%4
            break;
    }},5000);
}