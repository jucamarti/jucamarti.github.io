// Funciones auxiliares para el CV
// Juan Carlos Martinez Mangini
// trabajo final Ticmas-primer curso

//////////////////////////////////////////////////
// funciones auxiliares
//////////////////////////////////////////////////

// mostrar foto si esta oculta, ocultarla si esta mostrada
function onOffFoto() {
	var elem = document.getElementById("divFoto");
	if (elem.style.display === "none") {
		elem.style.display = "block";
	} else {
		elem.style.display = "none";
	}
}

// mostrar detalle laboral si esta oculto, ocultarlo si esta mostrado
function onOffPuesto(contAdic, boton) {
	var elemContAdic = document.getElementById(contAdic);
	var elemBoton = document.getElementById(boton);

	if ((elemContAdic.style.getPropertyValue('--primeraIter') === "") || (elemContAdic.style.display === "none")) {
		elemBoton.innerHTML = "Menos detalle";
		elemContAdic.style.display = "inline" ;
		elemContAdic.style.setProperty('--primeraIter', 0) ;
	} else {
		elemBoton.innerHTML = "Mas detalle";
		elemContAdic.style.display = "none" ;
	}
}

//////////////////////////////////////////////////
// programa principal
//////////////////////////////////////////////////

document.getElementById("botonFoto").onclick = onOffFoto;


