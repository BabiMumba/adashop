import { database, ref, push, set } from './config.js';

// Récupération du formulaire
const form = document.getElementById('articleForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Récupération des données du formulaire
    const nomArticle = document.getElementById('nomArticle').value;
    const prix = document.getElementById('prix').value;
    const quantite = document.getElementById('quantite').value;
    const images = document.getElementById('images').value;

    // Référence vers Firebase Database
    const reference = push(ref(database, 'articles'));

    // Sauvegarder les données
    set(reference, {
        nomArticle: nomArticle,
        prix: prix,
        quantite: quantite,
        images: images
    }).then(() => {
        alert('Article enregistré avec succès !');
        form.reset();  // Réinitialiser le formulaire après soumission
    }).catch((error) => {
        console.error("Erreur lors de l'enregistrement :", error);
    });
});