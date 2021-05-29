function getInitials(){
  prenom = document.getElementById('prenom').value
  millieu = document.getElementById('millieu').value
  famille = document.getElementById('famille').value
 initials = "Vos initiales sont: " + prenom[0].toUpperCase() + '.' + millieu[0].toUpperCase() + '.' + famille[0].toUpperCase()
  document.getElementById('print').innerHTML = initials;
}
function getFull(){
    prenom = document.getElementById('prenom').value
    millieu = document.getElementById('millieu').value
    famille = document.getElementById('famille').value
    prenom = prenom[0].toUpperCase() + prenom.slice(1).toLowerCase()
    millieu = millieu[0].toUpperCase() + millieu.slice(1).toLowerCase()
    famille = famille[0].toUpperCase() + famille.slice(1).toLowerCase()
    fullName = "Votre nom complet est: " + prenom + " " + millieu + " " + famille
    document.getElementById('print').innerHTML = fullName;
}
function getUser(){
  prenom = document.getElementById('prenom').value
  millieu = document.getElementById('millieu').value
  famille = document.getElementById('famille').value
  user = "Votre nom d'utulisateur est: " + prenom[0].toLowerCase()+millieu[0].toLowerCase()+famille.toLowerCase()	 
  document.getElementById('print').innerHTML = user;
}
