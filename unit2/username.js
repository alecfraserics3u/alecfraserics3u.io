function getInit() {
  let prenom = document.getElementById('firstName').value;
  let nomMil = document.getElementById('midName').value;
  let nomFam = document.getElementById('lastName').value;
  let init = prenom.charAt(0).toUpperCase() + '.' + nomMil.charAt(0).toUpperCase() + '.' + nomFam.charAt(0).toUpperCase();
  document.getElementById('output').innerHTML = init;
}

function getName() {
  let prenom = document.getElementById('firstName').value;
  let nomMil = document.getElementById('midName').value;
  let nomFam = document.getElementById('lastName').value;
  prenom = prenom.charAt(0).toUpperCase() + prenom.slice(1).toLowerCase();
  nomMil = nomMil.charAt(0).toUpperCase() + nomMil.slice(1).toLowerCase();
  nomFam = nomFam.charAt(0).toUpperCase() + nomFam.slice(1).toLowerCase();
  let nomComp = prenom + ' ' + nomMil + ' ' + nomFam;
  document.getElementById('output').innerHTML = nomComp;
}

function getUti() {
  let prenom = document.getElementById('firstName').value;
  let nomMil = document.getElementById('midName').value;
  let nomFam = document.getElementById('lastName').value;
  let nomUti = prenom.charAt(0).toLowerCase() + nomMil.charAt(0).toLowerCase() + nomFam.toLowerCase();
  document.getElementById('output').innerHTML = nomUti;
}
