//mediante el importe ingrese el mayor de la compra
//decir cuanto es el total 
//a)si supera los 100$ descuento de 10%
//b)si supero los$50 el descuento es 5%
//c)si es menor a $50 le sumara el 15%

function mostrar()
{ 
	var suma1;
    var suma2;
    var suma3;
    var suma4;
    var porcentajeRecargo;
    var resultado;
    var descuentoDiez;
    var descuentoCinco;
    var aumentoQuince;
    var total;

 suma1= prompt("primer valor");
 suma1= parseInt(suma1);

 suma2= prompt("segundo valor");
 suma2= parseInt(suma2);

 suma3= prompt("tercer valor");
 suma3= parseInt(suma3);

 suma4= prompt("cuarto valor");
 suma4= parseInt(suma4);

resultado= suma1 + suma2 + suma3 + suma4;
resultado= parseInt(resultado);

if(resultado>99)
{
  descuentoDiez=resultado*10/100;
  total=resultado- descuentoDiez;
  alert(total);
}
  else
  {
    if(resultado>49)
    {
    	descuentoCinco= resultado*5/100;
    	total=resultado- descuentoCinco;
        alert(total);
    }

    	else
  {
  	if(resultado<50)
  	{
  		porcentajeRecargo=resultado*15/100;
    total=resultado+porcentajeRecargo;
    alert(total);
    }
  }
   
if(suma1>suma2 && suma3>suma4)
{
	mensaje="el valor mayor es" + suma1
}

else
{
	if(suma3>suma2 && suma3>suma4 && suma3>suma1)
	{
		mensaje="el valor mayor es "+suma3
	}
	else
	{
		if(suma4>suma2 && suma4>suma3 && suma4>suma1)
		{
			mensaje= "el valor mayor es "+suma4
		}
	else
		if(resultado>99)
         {
          descuentoDiez=resultado*10/100;
           total=resultado- descuentoDiez;
           alert(total);
         }
    else
        if(resultado>49)
        {
    	descuentoCinco= resultado*5/100;
    	total=resultado- descuentoCinco;
        alert(total);
        }

    else
       {
  	   if(resultado<50)
  	   {
  		porcentajeRecargo=resultado*15/100;
        total=resultado+porcentajeRecargo;
        alert(total);
    }

}
alert(mensaje);	

  

}
