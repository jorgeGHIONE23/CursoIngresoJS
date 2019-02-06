/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numero1;
	var numero2;
	var entero1;
	var entero2;

	numero1 = numeroUno.value;
	numero2 = numeroDos.value;
    entero1 = parseInt(numero1);
    entero2 = parseInt(numero2);

    resultado= entero1 + entero2;
    alert(resultado);


}

function restar()
{
	var numero1;
	var numero2;
	var entero1;
	var entero2;

	numero1 = numeroUno.value;
	numero2 = numeroDos.value;
    entero1 = parseInt(numero1);
    entero2 = parseInt(numero2);

    resultado= entero1 - entero2;
    alert(resultado);
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var entero1;
	var entero2;

	numero1 = numeroUno.value;
	numero2 = numeroDos.value;
    entero1 = parseInt(numero1);
    entero2 = parseInt(numero2);

    resultado= entero1 * entero2;
    alert(resultado);
}

function dividir()
{
	var numero1;
	var numero2;
	var entero1;
	var entero2;

	numero1 = numeroUno.value;
	numero2 = numeroDos.value;
    entero1 = parseInt(numero1);
    entero2 = parseInt(numero2);

    resultado= entero1 / entero2;
    alert(resultado);
}

