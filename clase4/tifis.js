var tablero, direccion;

var fondo = {
	imagenURL : "fondo.png",
	imagenOK  : false
};

var liz = {
	lizURL    : "liz.png",
	lizOK     : false,
	x         : 400,
	y         : 200
};

var teclas = {
	UP        : 38,
	DOWN      : 40,
	LEFT      : 37,
	RIGHT     : 39 
	//Codigo ASCII de las teclas se puede ver con console.log
};

var tifis = {
	x         : 100,
	y         : 100,
	frenteURL : "diana-frente.png",
	frenteOK  : false,
	atrasURL : "diana-atras.png",
	atrasOK  : false,
	derURL : "diana-der.png",
	derOK  : false,
	izqURL : "diana-izq.png",
	izqOK  : false,
	velocidad : 20
};


function confirmarFondo()
{
	fondo.imagenOK = true;
	dibujar();

}

function confirmarAtras()
{
	tifis.atrasOK = true;
	dibujar();
}

function confirmarDer()
{
	tifis.derOK = true;
	dibujar();

}

function confirmarFrente()
{
	tifis.frenteOK = true;
	dibujar();
}

function confirmarIzq()
{
	tifis.izqOK = true;
	dibujar();
}

function confirmarLiz()
{
	liz.lizOK = true;
	dibujar();
}


function dibujar() 
{

	//Capa 1: fondo
	if(fondo.imagenOK)
	{
		tablero.drawImage(fondo.imagen, 0,0);
	}

	//Capa 2: Tifis 
	var tifiDibujo = tifis.frente;

	if(tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK)
	{
		if (direccion == teclas.UP){
			tifiDibujo = tifis.atras;
		}
		if (direccion == teclas.DOWN){
			tifiDibujo = tifis.frente;
		}
		if (direccion == teclas.LEFT){
			tifiDibujo = tifis.izq;
		}
		if (direccion == teclas.RIGHT){
			tifiDibujo = tifis.der;
		}

		tablero.drawImage(tifiDibujo, tifis.x, tifis.y);
	}

	//Capa 3: Liz
	//Como lizOK es booleana (verdadera o falsa), no necesito comparar
	if(liz.lizOK)
	{
		tablero.drawImage(liz.lizy, liz.x, liz.y);
	}
}

function inicio()
{
	var canvas          = document.getElementById("campo");
	tablero             = canvas.getContext("2d");
	//Tablero es el lienzo que me permite dibujar
	fondo.imagen        = new Image();
	//Internamente Image() es equivalente a <img>
	fondo.imagen.src    = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;
	//Funcion dibujarFondo va sin () porque quiero que sea llamada cuando la imagen cargue

	liz.lizy            = new Image();
	liz.lizy.src        = liz.lizURL;
	liz.lizy.onload     = confirmarLiz;

	//Tifis Frente
	tifis.frente        = new Image();
	tifis.frente.src    = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;

	//Tifis Atras
	tifis.atras        = new Image();
	tifis.atras.src    = tifis.atrasURL;
	tifis.atras.onload = confirmarAtras;

	//Tifis Izquierda
	tifis.izq        = new Image();
	tifis.izq.src    = tifis.izqURL;
	tifis.izq.onload = confirmarIzq;

	//Tifis Derecha
	tifis.der        = new Image();
	tifis.der.src    = tifis.derURL;
	tifis.der.onload = confirmarDer;



	document.addEventListener("keydown", teclado);
	//El evento de presionar una tecla se llama keydown y cuando ocurra ejecuto la funcion teclado
}

function teclado(datos) 
{
	//Para que suba tengo que restarle en Y
	//Para que baje sumarle en Y
	//Para la izquierda restarle en X
	//Para la derecha sumarle en X

	//Guardo en "codigo" el numero de tecla oprimida		
	var codigo = datos.keyCode;
	//Arriba
	if (codigo == teclas.UP)
	{
		if (tifis.y > 0) {
			tifis.y -= tifis.velocidad;
		}
	}
	//Abajo
	if (codigo == teclas.DOWN)
	{
		if (tifis.y < 450)
		{
			tifis.y += tifis.velocidad;
		}
	}

	//Derecha
	if (codigo == teclas.RIGHT)
	{
		if (tifis.x < 450)
		{
			tifis.x += tifis.velocidad;
		}
	}

	//Izquierda
	if (codigo == teclas.LEFT)
	{
		if (tifis.x > 0)
		{
			tifis.x -= tifis.velocidad;
		}
	}

	direccion = codigo;

	dibujar();
}


/*
function moverLiz(datos)
{
	while(datos.keyCode)
	{
		liz.y -=10;
	}
}
*/