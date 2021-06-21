var sum = 0 // valeur des mains
var multiplier = 0; // si tu perds, le multiplier est -1, si tu gagnes c'est 1 et etc.
var bet = parseInt(prompt("Quel est votre mise pour cette ronde?")) // prompt pour ta mise a chaque ronde
for (let i=0; i<1;){
  if (bet < 1 || bet > 1000){
    alert("Erreure. Mises de 1-1000")
    bet = prompt("Quel est votre mise pour cette ronde?")
  } else {
    i++
  }
}
var deck = [ // tableau pour tous les cartes
  //clubs
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/ka.png'>", 1],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/k2.png'>", 2],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/k3.png'>", 3],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/k4.png'>", 4],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/k5.png'>", 5],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/k6.png'>", 6],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/k7.png'>", 7],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/k8.png'>", 8],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/k9.png'>", 9],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/k10.png'>", 10],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/kj.png'>", 10],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/kq.png'>", 10],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/kk.png'>", 10],
  // hearts
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/sa.png'>", 1],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/s2.png'>", 2],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/s3.png'>", 3],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/s4.png'>", 4],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/s5.png'>", 5],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/s6.png'>", 6],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/s7.png'>", 7],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/s8.png'>", 8],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/s9.png'>", 9],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/s10.png'>", 10],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/sj.png'>", 10],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/sq.png'>", 10],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/sk.png'>", 10],
  // spades
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/pa.png'>", 1],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/p2.png'>", 2],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/p3.png'>", 3],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/p4.png'>", 4],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/p5.png'>", 5],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/p6.png'>", 6],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/p7.png'>", 7],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/p8.png'>", 8],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/p9.png'>", 9],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/p10.png'>", 10],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/pj.png'>", 10],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/pq.png'>", 10],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/pk.png'>", 10],
  // diamonds
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/la.png'>", 1],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/l2.png'>", 2],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/l3.png'>", 3],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/l4.png'>", 4],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/l5.png'>", 5],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/l6.png'>", 6],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/l7.png'>", 7],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/l8.png'>", 8],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/l9.png'>", 9],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/l10.png'>", 10],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/lj.png'>", 10],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/lq.png'>", 10],
  ["<img src ='https://www.improvemagic.com/wp-content/uploads/2020/11/lk.png'>", 10],
]
// Fonction qui genere deux cartes au hazard
var random = [] // tableau qui stockent plusieurs nombres hazard 
for (let i=0; i<10; i++){
  random.push(Math.round(Math.random() * 51))
}
// Fonction qui creer des mains pour chaque utilisateur
function donnerCarte(){
  for (let i=1; i<9; i++){
    jouMain = [
      [deck[random[0]][0], deck[random[0]][1]], //genere deux cartes pour le joueur
      [deck[random[1]][0], deck[random[1]][1]]
      ]
    crouMain = [
      [deck[random[2]][0], deck[random[2]][1]],//genere deux cartes pour le croupier
      [deck[random[3]][0], deck[random[3]][1]]
      ]}
}
// fonction qui determine la valeur de ta main 
function valeur(carte){
  var sum=0
  if (carte == crouMain){
    var length = crouMain.length
  }else{
    var length = jouMain.length // pour savoir combien de fois on fait la boucle
  }
    for (var i=0; i<length;i++){
        if (carte[0][1] == 1 && (carte[0][1] + carte [1][1]) <= 11){
          carte[0][1] = 11 
        }
        if (carte[1][1] == 1 && carte[0][1] + carte [1][1] <= 11){
          carte[1][1] = 11
        }
        sum += carte[i][1]
    }
    return sum
}

//si tu reste, les mains sont finnalisees et on peut commencer a trouver le gagnant
function rester(){
    crouFrappe()
    if (valeur(crouMain) > valeur(jouMain) && valeur(crouMain) <= 21){
      alert("Vous avez perdu: " + bet*-1 + "$ !!!")
      alert("Puisque vous avez perdu, le jeu va bientot recommencer.")
      setTimeout(function(){ window.location.reload() }, 5000);
    } else if (valeur(crouMain) == valeur(jouMain)){
      alert("Push ; Gardez vos mises")
    } else if (valeur(jouMain)  == 21){
        alert("Blackjack! Vous avez gagnez: " + bet*1.5 + "$ !")
    }else if (valeur(jouMain) > valeur(crouMain) && valeur(jouMain) < 21){
      alert("Vous avez gagnez: " + bet + "$ !")
    } 
    document.getElementById("carte-2-croupier").innerHTML = "La deuxieme carte du croupier: <br>" +  crouMain[1][0]
    document.getElementById("valeur-croupier").innerHTML = "<br> Valeur totale: " + valeur(crouMain)
  }
// Fonction qui run quand on clique le boutton 'frappe!'. Ceci donne une nouvelle carte a l'utilisateur mais ci cette nouvelle carte fait en sorte que la valeur de la main est > 21, il affiche bust. 
  function frappe(){
    var i = jouMain.length
    jouMain.push([deck[random[i+4]][0], deck[random[i+4]][1]])
    var htmlOutput = "<br> Nouvelle carte: <br>" + jouMain[i][0]
    document.getElementById("cartes-joueur-hit").innerHTML += htmlOutput
    document.getElementById("valeur-joueur-2").innerHTML = "Nouvelle valeure: " + valeur(jouMain)
    if (valeur(jouMain) > 21){ 
      alert("Tu a bust!")
      setTimeout(function(){ window.location.reload() }, 3000);
      alert("Puisque vous avez perdu, le jeu va bientot recommencer.")
    } else if (jouMain.length > 4 ){
      alert("5 cartes sous 22, tu gagnes: " + bet + "$ !")
    } else {
      crouFrappe()
    }
  }
  function crouFrappe(){
    for (var i=0; i<5; i++){
      if (valeur(crouMain) <= 16){
        crouMain.push([deck[random[i+6]][0], deck[random[i+6]][1]])
        document.getElementById("cartes-autres-croupier").innerHTML += crouMain[i+2][0]
      }
      if (valeur(crouMain) > 21 && valeur(jouMain) < 21){ 
        alert("Le croupier a bust! Vous avez gagner:  " + bet + "$ !")
        document.getElementById("carte-2-croupier").innerHTML = "La deuxieme carte du croupier: <br>" +  crouMain[1][0]
        document.getElementById("valeur-croupier").innerHTML = "<br> Valeur totale: " + valeur(crouMain)
        i = 10
      } else if (crouMain.length > 4 ){
        alert("Le croupier a 5 cartes sous 22, tu perds: " + bet*-1 + "$ !")
        document.getElementById("cartes-autres-croupier").innerHTML += crouMain[i+2][0]
    }
    
    }
  }
// affiche toutes les cartes pour debuter
donnerCarte()
document.getElementById("carte-1-croupier").innerHTML = crouMain[0][0] + '<img src="https://opengameart.org/sites/default/files/card%20back%20red.png" width=225 height=300>'
document.getElementById("valeur-croupier").innerHTML = "Valeur: ???"
document.getElementById("cartes-joueur").innerHTML = "Cartes du joueur: <br>" + jouMain[0][0] + jouMain[1][0]
document.getElementById("valeur-joueur").innerHTML = "Valeur: " + valeur(jouMain)
