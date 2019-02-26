function mostrar()
{

var clave = prompt("ingrese el número clave.");
var intentos
while(clave != "utn750")

{
  intentos= intentos + 1
   console.log(clave);
	clave=prompt("incorrecto, ingrese el número clave.");	
	if(intentos==3)
	{
		break;
	}
}

}//FIN DE LA FUNCIÓN
