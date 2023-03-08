# TP3 : Afficher la liste des utilisateurs

🎯 **Objectif** : S'entrainer à utiliser Fetch pour récupérer la liste des utilisateurs d'un site internet à partir d'une API, puis les afficher sur une page web en utilisant JavaScript.

## Etape 1 : Fichier HTML

Vous devez créer un fichier HTML de base avec une section pour afficher les utilisateurs.

```
<!DOCTYPE html>
<html>
  <body>
    <section id="utilisateurs"></section>
  </body>
</html>
```

## Etape 2 : Créer fichier JS 

Ensuite, vous devez créer un fichier JavaScript séparé et l'inclure dans leur fichier HTML.

```
<script src="script.js"></script>
```

## Etape 3 : Selectionner la section des utilisateurs

Dans le fichier JavaScript, vous devez utiliser **querySelector** pour sélectionner la section des utilisateurs.

```
let articles = document.querySelector("#utilisateurs");
```

## Etape 4 : Requête HTTP

Vous devez ensuite utiliser la méthode fetch pour récupérer les utilisateurs à partir d'une API.

```
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    // traiter les données ici
  });
```

## Etape 5 : Afficher les utilisateurs dans un boucle

Dans le gestionnaire de la promesse then, vous devez itérer sur les articles reçus de l'API et utiliser innerHTML pour les afficher dans la section des utilisateurs.

```
data.forEach(user => {
  utilisateurs.innerHTML += `<h2>${user.name}</h2><p>${user.email}</p>`;
});
```

## Etape 6 : Mise en forme dans un tableau

Pour que le rendu soit plus joli, vous pouvez utiliser les balises d'un tableau **table, tr, td** pluôt que d'utiliser les **h2** et **p**.

[Voir ici comment créer un tableau basique en HTML](https://developer.mozilla.org/fr/docs/Learn/HTML/Tables/Basics)

## 🔥 Bonus :)

Si vous avez terminé rapidement et que vous souhaitez aller plus loin, vous pouvez expérimenter des fonctionnalités supplémentaires pour améliorer l'exercice. Vous pouvez ajouter du style, créer un tableau avec des jolies bordures, de jolies couleurs de fond etc.