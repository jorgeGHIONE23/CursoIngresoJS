/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldo;
var sueldoConAumento;
var aumento;

sueldo= document. getElementById("sueldo").value;
sueldo= parseInt("sueldo");
//sueldo=parseFloat(sueldo);
//floot es para sacar con coma ;

aumento= sueldo*0.1;

sueldoConAumento= sueldo + aumento;
sueldo= document. getElementById("resultado").value=sueldoConAumento
//porcentaje=sueldo*10/100;
//sueldoConAumento= sueldo + porcentaje;
//sueldoConAumento= sueldo* 1.20;
	
}
