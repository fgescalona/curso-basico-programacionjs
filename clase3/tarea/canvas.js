//En canvas la esquina superior izquierda es el punto(0,0)
//NO HAY PUNTOS NEGATIVCOS EN CANVAS
//Para poder dibujar en Canvas necesito 2 cosas
//Canvas es todo el eje de coordenadas
//El contexto es donde dibujo

var dibujo, lienzo, t, b;

function inicio()
{
	t      = document.getElementById("numeroLineas");
	b      = document.getElementById("dibujar");
	dibujo = document.getElementById("canvas");
	//Para obtener el id del HTML
	lienzo = dibujo.getContext("2d");
	//Para obtener el eje interno de coordenadas

	b.addEventListener("click", dibujarGrilla);

	lienzo.beginPath();
	lienzo.strokeStyle = "#00F";
	lienzo.fillStyle = "#00F";
	lienzo.arc(150, 150, 100, (2*Math.PI), false);
	//parametros: 2 centro del circulo, radio del circulo, radianes que va a tener el circulo (1 igual a medio, 2 igual a completo)
	lienzo.fill();
	lienzo.closePath();
	lienzo.stroke();

}

function dibujarGrilla()
{
	var l       = lienzo;
	var usuario = Number(t.value);
	var limite  = usuario + 1;
	l.strokeStyle = "#AAA";

	for(linea=0; linea <= limite; linea++)
	{
		punto = 2*(linea * 300/limite);
		l.beginPath();
		l.moveTo(1, punto);
		l.lineTo(punto, 1);
		l.stroke();
		l.closePath();
	}

	for(linea=0; linea <= limite; linea++)
	{
		punto = 2*(linea * 300/limite);
		l.beginPath();
		l.moveTo(1, 300-punto);
		l.lineTo(punto, 300);
		l.stroke();
		l.closePath();
	}
}

