<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Afficheur de nom, 2.6</title>
  </head>
  <body>
    <h2>Afficheur de nom, par Alec Fraser</h2>
    <form>
      Quel est votre prenom? <input type="text" id="prenom"><br>
      Quel est votre nom du millieu? <input type="text" id="millieu"><br>
      Quel est votre dernier nom? <input type="text" id="famille"><br><br>
      <input type="button" onclick="getInitials()" value="Afficher les initiales" style="background-color:red; border-color:blue; color:white">
      <input type="button" onclick="getFull()" value="Afficher le nom complet" style="background-color:red; border-color:blue; color:white">
      <input type="button" onclick="getUser()" value="Afficher le nom d'utulisateur" style="background-color:red; border-color:blue; color:white">
    </form>
    <p id="print"></p>
    <script src="formulaire.js"></script>
  </body>
</html>
