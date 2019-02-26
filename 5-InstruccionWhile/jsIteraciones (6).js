function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

while(contador<5)
{
	contador++;
	numero=prompt("Ingrese otro numero " + contador);
	numero= parseFloat(numero);
    acumulador= numero + acumulador;



}
promedio= suma/ acumulador;
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN