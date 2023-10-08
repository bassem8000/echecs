function creerGrille() {
    const grille = document.getElementById("grille");

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let tab = ["♜","♞","♝","♛","♚","♝","♞","♜"]
            const cellule = document.createElement("div");
            cellule.classList.add("cellule");
            cellule.textContent = tab[j];
            grille.appendChild(cellule);
        }
    }
}
window.onload = creerGrille;


let nom = document.getElementById("barre");
console.log(nom.tagName);