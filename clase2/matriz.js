//var menu = ["Productos", "Ventas", "Contacto"];
//document.write(menu[0]);

//var dofa = [["Fortalezas", "Oportunidades"],["Debilidades", "Amenazas"]];
//document.write(dofa[0][1]);

//Funciones ganar y perder

function explosion()
{
	alert("BOOM!!!");
	document.write("<h1>BOOM! Elegiste un area minada:( </h1>");
}

function ganaste()
{
	document.write("Eres un ganador :)");
}

//Variables

var campo = [ [1, 0, 0] ,
			  [0, 1, 0] ,
			  [1, 1, 1]	];

// 1 = bomba y 0 = vacio

var x, y;
var textos   = ["Cesped", "Bomba"];

alert(" Estas en un campo minado \n\n Elije una posición entre el 0 y el 2 para el X y para Y");

x = prompt("Posición en X (entre 0 y 2)");
y = prompt("Posición en Y (entre 0 y 2)");

// Condiciones para la lógica del juego

if (x < 3 && y <3)
{
	var posicion = campo[x][y];
	
	document.write("Elegiste " + textos[posicion] + "<br/><br/>");

	if (posicion == 1) 
	{
		explosion();
	}
	else
	{
		ganaste();
	}
}
else
{
	document.write("¡Te saliste del campo!");
	explosion();
}

