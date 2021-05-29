var quan = parseInt(prompt("Combien de nombres voulez-vous entrer? ")) //variable pour la quantite de nombres que lutulisateur veut entrer
var tot=0;
var max=0;
var min=10**10
for (let i=1; i < quan+1; i++){ // arrete quand le nombre diterations est plus grand que la quantite de nombres
var num = parseInt(prompt("Choisis un nombre: (1-100)")) // continue a demander pour un nombre a chaque iteration
tot = tot + num //stocke le total de tous les nombres
if (num > max){
  max = num //stocke le max comme le nombre le plus grand
}else{
  alert("")
}
if (num < min){
  min=num //stocke le min comme le nombre le plus petit
}else{
  alert("")
}
}
alert("La somme est: " + tot) //imprime tous les resultats
alert("Nombres d'entrees: " + quan)
alert("La moyenne est: " + (tot/quan))
alert("Val. min. : " + min)
alert("Val. max. : " + max)
