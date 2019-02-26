function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
    numero=parseInt(numero);

    while(!(numero<10 && numero>=0))
{
	console.log(numero);
	numero=prompt("incorrecto, ingrese un número valido.");
}
}//FIN DE LA FUNCIÓN