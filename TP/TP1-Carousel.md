# TP1 : Créer un carrousel d'images

🎯 **Objectif** : Créer un carrousel d'images en utilisant JavaScript pour manipuler le DOM.

## Etape 1 : Fichier HTML

Vous devez créer un fichier HTML de base avec une section qui contiendra une image.

```
<!DOCTYPE html>
<html>
  <body>
    <section>
        <img id="image" src="">
    </section>
  </body>
</html>
```

## Etape 2 : Créer fichier JS 

Ensuite, vous devez créer un fichier JavaScript séparé et l'inclure dans leur fichier HTML.

```
<script src="script.js"></script>
```

## Etape 3 : Selectionner l'image dans le DOM

Dans le fichier JavaScript, vous devez utiliser **querySelector** pour sélectionner la section qui contient l'image.

```
let image = document.querySelector("#image");
```

## Etape 4 : Tableau

Ensuite, vous devez créer un tableau qui contiendra les URLs des images que vous souhaitez afficher dans le carrousel. Vous pouvez utiliser des images au format JPG/PNG que vous trouvez sur internet.

```
let images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg"
];
```

## Etape 5 : Variable index

Vous devez ensuite créer une variable pour stocker l'index actuel de l'image affichée et initialiser à 0

```
let currentIndex = 0;
```

## Etape 6 : Changer l'image dynamiquement

Ensuite, vous devez créer une fonction qui changera l'image affichée en utilisant la propriété **src** de l'élément image.

```
function changeImage() {
  image.src = images[currentIndex];
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
}
```

## Etape 7 : Interval de changement

Vous devez utiliser **setInterval** pour appeler cette fonction toutes les 3 secondes afin de créer un carrousel automatique.

```
setInterval(changeImage, 3000);
```

## 🔥 Bonus :)

Si vous avez terminé rapidement et que vous souhaitez aller plus loin, vous pouvez expérimenter des fonctionnalités supplémentaires pour améliorer leur carrousel. Par exemple, vous pouvez ajouter des boutons pour contrôler manuellement le carrousel, ajouter des transitions pour les images, etc.