const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const body = document.querySelector('body');
const li1 = document.querySelector('.li1');
const li2 = document.querySelector('.li2');
const li3 = document.querySelector('.li3');
const li4 = document.querySelector('.li4');
const li5 = document.querySelector('.li5');

hamburger.addEventListener('click', activeNav);

function activeNav() {
    let ulActive = ul.classList.toggle('active');
    line3.classList.toggle('hideLine3');
    line2.classList.toggle('fermer');
    line1.classList.toggle('fermer');
    body.classList.toggle('caché');
}

li1.addEventListener('click', Supprimer);
li2.addEventListener('click', Supprimer);
li3.addEventListener('click', Supprimer);
li4.addEventListener('click', Supprimer);
li5.addEventListener('click', Supprimer);

function Supprimer() {
    activeNav();
}
const projets = document.querySelectorAll('.def-container');
let indexProjetCourant = 0;

function afficherProjet(index) {
    projets.forEach((projet, i) => {
        projet.style.display = i === index ? 'block' : 'none';
    });
}

function projetSuivant() {
    indexProjetCourant = (indexProjetCourant + 1) % projets.length;
    afficherProjet(indexProjetCourant);
}

function projetPrecedent() {
    indexProjetCourant = (indexProjetCourant - 1 + projets.length) % projets.length;
    afficherProjet(indexProjetCourant);
}

// Appel initial pour afficher le premier projet
afficherProjet(indexProjetCourant);

// Ajoute ces deux lignes pour lier les boutons à la navigation dans le carrousel
document.querySelector('.bouton-suivant').addEventListener('click', projetSuivant);
document.querySelector('.bouton-precedent').addEventListener('click', projetPrecedent);
