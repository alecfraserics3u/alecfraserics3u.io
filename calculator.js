// Travail 3
 
nombre1 = parseInt(prompt("Quel est votre premier nombre? ")) // On demande l'utulisateur pour les nombres et l"operation
operation = parseInt(prompt("Quel est l'operation? (+,-,*,/,%) "))
nombre2 = parseInt(prompt("Quel est votre deuxieme nombre? "))
if (operation == 1){ // if statement qui fait les operations
 console.log(nombre1 + nombre2)
} else if (operation == 2){
 console.log(nombre1 - nombre2)
} else if (operation == 3){
 console.log(nombre1 * nombre2)
} else if (operation == 4){
 console.log(nombre1 / nombre2)
} else if (operation == 5){
 console.log(nombre1 % nombre2)
}else{
 console.log("Erreure. ") //erreur si les autres options ne fonctionnent pas
}
//////////////////////////////////////////////////////////////////////
nombre1 = parseInt(prompt("Quel est votre premier nombre? "))
operation = parseInt(prompt("Quel est l'operation? (+,-,*,/,%) "))
nombre2 = parseInt(prompt("Quel est votre deuxieme nombre? "))
 
switch (true){ // switch statement
 case operation==1:
   console.log(nombre1 + nombre2)
   break;
 case operation==2:
   console.log(nombre1 - nombre2)
   break;
 case operation ==3:
   console.log(nombre1 * nombre2)
   break;
 case operation ==4:
   console.log(nombre1 / nombre2)
   break;
 case operation ==5:
   console.log(nombre1 % nombre2)
   break;
 case operation ==6:
   console.log("Erreur")
}
