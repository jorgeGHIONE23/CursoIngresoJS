/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
  var numero1;
  var numero2;
  var entero1;
  var entero2;
  var resultado;

  numero1= numeroUno.value;
  numero2= numeroDos.value;
  entero1= parseInt( numero1 );
  entero2= parseInt(numero2);
  resultado=  entero1 + entero2 ;
  alert(resultado);

}

