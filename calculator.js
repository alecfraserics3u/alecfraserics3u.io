nombre1 = parseInt(prompt("Quel est votre premier nombre? "))
operation = parseInt(prompt("Quel est l'operation? (+,-,*,/,% (1-5) "))
nombre2 = parseInt(prompt("Quel est votre deuxieme nombre? "))
document.write("REPONSE: ")
switch (true){ // switch statement
 case operation==1:
   document.write(nombre1 + nombre2) 
   break;
 case operation==2:
   document.write(nombre1 - nombre2)
   break;
 case operation ==3:
   document.write(nombre1 * nombre2)
   break;
 case operation ==4:
   document.write(nombre1 / nombre2)
   break;
 case operation ==5:
   document.write(nombre1 % nombre2)
   break;
 case operation ==6:
   document.write("Erreur")
}
