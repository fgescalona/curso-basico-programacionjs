		var peso;
		var pesoEnMarte;  //CamelCase

		alert("¿Quieres saber tu peso en marte?")
		peso = prompt("¿Cuál es tu peso en kg?", "75");
		peso = parseInt(peso);

		pesoEnMarte = (peso/9.81) * 3.711;

		alert(pesoEnMarte);


		//alert es una función
		//() : parámetros de la función
		//"" : cadenas de textos
		/*
		var nombre   = "Fides";
		var apellido = "Escalona";
		var edad     = 23;

		//alert(nombre + " " + apellido + "\n" + edad + " años.");
		alert("2" + 5 * 8);

		*/