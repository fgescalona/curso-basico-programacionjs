/*   piedra.js 
 *   Juego piedra, papel y tijera en Javascript.
 *  
 *   Buena práctica: es mucho mas facil leer los if con los nombres de las variables
 *   que los valores 0, 1 2 y tener que regresar a ver qué variable es.
 */

//Funcion para generar un numero aleatorio entero entre 0 y 2

function aleatorio(minimo, maximo)
{
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	//Math.floor quita redondea un numero (le quita los decimales)
	return numero;
}


//Variables

var piedra        = 0;
var papel         = 1;
var tijera        = 2;
var opciones      = ["Piedra", "Papel", "Tijera"];
var opcionMaquina = aleatorio(0, 2);
var opcionUsuario;

// Prompt para pedir al usuario su opcion

opcionUsuario = prompt("¿Qué elijes? \n Piedra : 0 \n Papel  : 1 \n Tijera : 2", 0);

// Mensaje al usuario con opción seleccionada

alert("Elegiste " + opciones[opcionUsuario]);

// Mensaje para el usuario con la opción aleatoria de la computadora

alert("La computadora eligió " + opciones[opcionMaquina]);

// Condiciones para la lógica del juego

if (opcionUsuario == piedra) {

	if (opcionMaquina      == piedra) 
	{
		alert("Empate!");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Perdiste!");
	}
	else if (opcionMaquina == tijera) 
	{
		alert("Ganaste!");
	}

}

else if(opcionUsuario      == papel)
{

	if (opcionMaquina      == piedra) 
	{
		alert("Ganaste!");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Empate!");
	}
	else if (opcionMaquina == tijera) 
	{
		alert("Perdiste!");
	}
}
else if(opcionUsuario      == tijera)
{

	if (opcionMaquina      == piedra) 
	{
		alert("Perdiste!");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Ganaste!");
	}
	else if (opcionMaquina == tijera) 
	{
		alert("Empate!");
	}
}

else
{
	alert("Elige una opción valida (1, 2, 3)");
}