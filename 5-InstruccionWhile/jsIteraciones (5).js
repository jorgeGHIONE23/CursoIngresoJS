function mostrar()
{

var sexo = prompt("ingrese f ó m .");
while(!(sexo=="f" || sexo=="m"))
{
	console.log(sexo);
	sexo=prompt("incorrecto, un valor valido");
}


//document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN