/*   piedraPapelTijeraLagartoSpock.js 
 *   Juego piedra, papel, tijera, lagarto, spock en Javascript.
 *  
 *   Autor: Fides Escalona
 */

//Funcion para generar un numero aleatorio entero entre 0 y 4

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
var lagarto       = 3;
var spock         = 4;
var opciones      = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
var opcionMaquina = aleatorio(0, 4);
var opcionUsuario;

// Prompt para pedir al usuario su opcion

opcionUsuario = prompt("¿Qué elijes? \n Piedra : 0 \n Papel  : 1 \n Tijera : 2 \n Lagarto : 3 \n Spock  : 4", 0);

// Mensaje al usuario con opción seleccionada

alert("Elegiste " + opciones[opcionUsuario]);

// Mensaje para el usuario con la opción aleatoria de la computadora

alert("La computadora eligió " + opciones[opcionMaquina]);

// Condiciones para la lógica del juego

if(opcionUsuario == opcionMaquina)
{
	alert("Empate!");
}
else if(opcionUsuario == piedra)
{
	if (opcionMaquina == papel) 
	{
		alert("Perdiste!");
	}
	else if (opcionMaquina == tijera) 
	{
		alert("Ganaste!");
	}
	else if (opcionMaquina == lagarto) {
		alert("Ganaste!");
	}
	else if (opcionMaquina == spock) {
		alert("Perdiste!");
	}
}
else if(opcionUsuario == papel)
{
	if (opcionMaquina == piedra) 
	{
		alert("Ganaste!");
	}
	else if (opcionMaquina == tijera) 
	{
		alert("Perdiste!");
	}
	else if (opcionMaquina == lagarto) {
		alert("Perdiste!");
	}
	else if (opcionMaquina == spock) {
		alert("Ganaste!");
	}
}
else if(opcionUsuario == tijera)
{
	if (opcionMaquina == piedra) 
	{
		alert("Perdiste!");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Ganaste!");
	}
	else if (opcionMaquina == lagarto) {
		alert("Ganaste!");
	}
	else if (opcionMaquina == spock) {
		alert("Perdiste!");
	}
}
else if(opcionUsuario == lagarto)
{
	if (opcionMaquina == piedra) 
	{
		alert("Perdiste!");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Ganaste!");
	}
	else if (opcionMaquina == tijera) {
		alert("Perdiste!");
	}
	else if (opcionMaquina == spock) {
		alert("Ganaste!");
	}
}
else if(opcionUsuario == spock)
{
	if (opcionMaquina == piedra) 
	{
		alert("Ganaste!");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Perdiste!");
	}
	else if (opcionMaquina == tijera) {
		alert("Ganaste!");
	}
	else if (opcionMaquina == lagarto) {
		alert("Perdiste!");
	}
}
else
{
	alert("Elige una opción valida (1, 2, 3)");
}