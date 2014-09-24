function Pokemon(n,v,a, g)
{
    this.nombre = n;
    this.vida   = v;
    this.ataque = a;
    this.grito  = g;
    this.gritar = function ()
    {
        alert(this.grito);
    }
}


function inicio()
{
    var pokemon = new Pokemon("Rattata", 40, 2, "¡Guaaaaaaaaaa!");

	if(pokemon.nombre == "Rattata")
	{
		document.write("<img src='ratatta.png'/>");
	}
	else if (pokemon.nombre == "Pikachu")
	{
		document.write("<img src='pikachu.png'/>");
	}
	else if (pokemon.nombre == "Bulbasur")
    {
    	document.write("<img src='bulbasur.png'/>");
    }

    pokemon.vida               = pokemon.vida - 13;
    nombrePokemon.textContent  = pokemon.nombre;
	datosPokemon.textContent   = document.write("<br/><br/>Este Pokemon tiene una vida de " + pokemon.vida + ", un ataque de " + pokemon.ataque + " y su grio es " + pokemon.grito);
}


/*
// Asignación por valor
// Asignación por referencia

//Funcion Pokemon
function Pokemon(nombrePokemon, vidaPoke, ataPoke)
{
	var estructuraPokemon =
	<p id="nombrePokemon">Pokemon de prueba</p>{
		nombre  : nombrePokemon,
		vida    : vidaPoke,
		ataque  : ataPoke,
		datos   : {tipo : "Tierra", debilidad : "Fuego"} 
		//Un objeto dentro de otro objeto
	};
	return estructuraPokemon;
}


//Instanciar los objetos

var pikachu     = Pokemon("Pikachu", 100, 55);
var bulbasur    = Pokemon("Bulbasur", 90, 50);

console.log(bulbasur);




DOCUMENT OBJECT MODEL

navigator, window, document son los principales obejetos de JS en el navegador.

Objeto
	Variables
	Funciones

document.write("Hola mamá!");
nombreDelObjeto.funcion
var pi = 3.141592654;
pi     = Math.floor(pi);
document.write(pi); 

var maxima;
maxima = Math.max(5, 23, 4, 5, 12, 24, 23);
document.write(maxima);

//Math es un objeto del navegador

var posicion = navigator.getCurrentPosition(mostrar);

function mostrar(posicion)
{
	document.write(posicion.coords.latitude + "," + posicion.coords.longitude);
	navigator.geolocatio.getCurrentPosition(mostrar);
}
*/