let image = document.querySelector("#image");

let images = [
    "http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_brown.png",
    "http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png",
    "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg",
    "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back07.jpg",
    "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg",
    "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back04.jpg",
];

let currentIndex = 0;

function changeImage() {
    image.src = images[currentIndex];
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
}
setInterval(changeImage, 3000);

// Partie Bonus

let previousButton = document.querySelector("button:nth-of-type(1)");
let nextButton = document.querySelector("button:nth-of-type(2)");

function previousImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    image.src = images[currentIndex];
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    image.src = images[currentIndex];
}

previousButton.addEventListener("click", previousImage);
nextButton.addEventListener("click", nextImage);

