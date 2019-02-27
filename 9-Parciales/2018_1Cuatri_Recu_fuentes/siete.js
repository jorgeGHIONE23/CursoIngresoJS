function mostrar()

{
 var notas=true 
 var sexo=true
 var contador=0
 var acumulador=0
  var resultado
  while(notas=true)
   {
   contador++
 notas=prompt("ingrese las notas ");
 notas=parseFloat(notas);
  while (isNaN(notas));
  {
   notas=prompt("ingresar su nota");
   notas= parseFloat(notas);
     while(notas>=10 && notas>0)
   {

  notas=prompt("este numero no es valido, ingresar un numero valido");
    notas=parseFloat(notas);
     
  }

}








}
