nouveau="Items: "
tousPrix=0
 
for (let i=0; i<1;){
  itemAchetee = prompt("Quel item achetes-tu? ") //prompt pour le nom de l'item,
  prixItem = parseFloat(prompt("Quel est le prix de cet item? "))
  cont = confirm("Voulez-vous ajouter un item? ")
  if (cont == true){ //si oui, la boucle recommence
    i=0;
  } else {
    i=1;
  }
  nouveau = nouveau + itemAchetee + ", " //stocke tous les items
  tousPrix = tousPrix + prixItem  //stocke le prix total
 
}
prixLivraison = 2 // le prix de livraison commence a 2 et change a 3 dans le code ci-dessous
if (tousPrix >= 10){
prixLivraison++ //le prix de livraison change a 3 si la commande est plus que 10$
} else{
  console.log("")
}
totalNoTax = Math.round((tousPrix+prixLivraison)*100)/100 //calcule et arrondis la valeur de la commande avant les taxes

document.write("++++++++++++++++")
document.write("RECU DE COMMANDE")
document.write("++++++++++++++++")
document.write(nouveau + "                   " + tousPrix + "$")
document.write("Livraison             " + prixLivraison + "$" )
document.write("SOUS-TOTAL            " + (totalNoTax) + "$")
document.write("Taxes                 " + Math.round(113*totalNoTax)/100+ "$") //calcule le tax
document.write("TOTAL                 " + Math.round(113*totalNoTax)/100 + "$") //ajoute le tax au sous-total
