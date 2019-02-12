/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	/* PRIMER COMANDO DE CONSOLA          */
	var importe;
	var aumento;
	var resultado;

	importe= document. getElementById("importe"). value;
	importe= parseInt("importe");

	aumento= importe * 0.1;

	resultado= importe + aumento;
	resultado= getElementBy('resultado'). value;

}
