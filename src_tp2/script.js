let button = document.querySelector("#guessButton");
let message = document.querySelector("#message");
let attemptsRemaining = 0;
let maxAttempts = 10; // Valeur par défaut pour le niveau de difficulté "facile"

let answer = Math.floor(Math.random() * 100) + 1;

// Gestion des niveaux de difficulté
document.querySelectorAll('input[type=radio][name=difficulty]').forEach(function (radio) {
    radio.addEventListener('change', function () {
        if (this.value === "medium") {
            maxAttempts = 7;
        } else if (this.value === "hard") {
            maxAttempts = 5;
        } else {
            maxAttempts = 10;
        }
        attemptsRemaining = maxAttempts;
        updateAttemptsRemaining();
    });
});

// Affichage du nombre de tentatives restantes
function updateAttemptsRemaining() {
    let attempts = document.querySelector("#attempts");
    if (!attempts) {
        attempts = document.createElement("p");
        attempts.setAttribute("id", "attempts");
        attempts.textContent = "Tentatives restantes : " + attemptsRemaining;
        document.querySelector("div").appendChild(attempts);
    } else {
        attempts.textContent = "Tentatives restantes : " + attemptsRemaining;
    }
}

// Fonction de vérification de la réponse
function checkAnswer() {
    let guess = document.querySelector("#guess").value;
    if (guess == answer) {
        message.textContent = "Félicitations, vous avez deviné le bon nombre!";
        button.disabled = true;
    } else if (guess < answer) {
        message.textContent = "Plus";
        attemptsRemaining--;
    } else {
        message.textContent = "Moins";
        attemptsRemaining--;
    }
    updateAttemptsRemaining();
    if (attemptsRemaining <= 0) {
        message.textContent = "Désolé, vous avez épuisé toutes vos tentatives. Le nombre était " + answer + ".";
        button.disabled = true;
    }
}

// Événement de clic sur le bouton "Devine!"
button.addEventListener("click", function () {
    checkAnswer();
});

// Événement de frappe sur la touche "Entrée"
document.querySelector("#guess").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkAnswer();
    }
});
