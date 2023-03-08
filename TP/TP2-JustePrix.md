# TP2 : Juste Prix avec les évènements

🎯 **Objectif** : Créer un jeu de devinette type "juste prix" en utilisant JavaScript pour gérer les événements.

## Etape 1 : Fichier HTML

Vous devez créer un fichier HTML de base avec un bouton et un paragraphe pour afficher les messages.

```
<!DOCTYPE html>
<html>
  <body>
    <button id="guessButton">Devine</button>
    <p id="message"></p>
  </body>
</html>
```

## Etape 2 : Créer fichier JS 

Ensuite, vous devez créer un fichier JavaScript séparé et l'inclure dans leur fichier HTML.

```
<script src="script.js"></script>
```

## Etape 3 : Selectionner le bouton et la zone de texte

Dans le fichier JavaScript, vous devez utiliser **querySelector** pour sélectionner le bouton et le paragraphe.

```
let button = document.querySelector("#guessButton");
let message = document.querySelector("#message");
```

## Etape 4 : Nombre aléatoire

Vous devez ensuite créer une variable pour stocker la réponse aléatoire, en utilisant **Math.random()** et **Math.floor()** pour générer un nombre aléatoire entre 1 et 100.

```
let answer = Math.floor(Math.random() * 100) + 1;
```

## Etape 5 : Variable index

Vous devez maintenant utiliser la méthode **addEventListener** pour ajouter un gestionnaire d'événements au bouton qui sera appelé lorsque l'utilisateur clique sur le bouton. Dans ce gestionnaire d'événements, vous devez demander à l'utilisateur de saisir un nombre et utiliser une boîte de dialogue pour afficher un message indiquant si le nombre deviné est plus grand, plus petit ou égal à la réponse.

```
button.addEventListener("click", function() {
  let guess = prompt("Devine un nombre entre 1 et 100:");
  if (guess == answer) {
    message.textContent = "Félicitations, vous avez deviné le bon nombre!";
  } else if (guess < answer) {
    message.textContent = "Désolé, le nombre deviné est plus petit que la réponse.";
  } else {
    message.textContent = "Désolé, le nombre deviné est plus grand que la réponse.";
  }
});
```

## 🔥 Bonus :)

Si vous avez terminé rapidement et que vous souhaitez aller plus loin, vous pouvez expérimenter des fonctionnalités supplémentaires pour améliorer leur carrousel. Par exemple, vous pouvez ajouter des limites de tentatives, ajouter des niveaux de difficulté, etc.