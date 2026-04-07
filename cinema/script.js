// Films
const films = [
  {
    title: "Avengers",
    image: "https://via.placeholder.com/200x300?text=Avengers",
    rating: 8.5
  },
  {
    title: "Inception",
    image: "https://via.placeholder.com/200x300?text=Inception",
    rating: 8.8
  },
  {
    title: "Titanic",
    image: "https://via.placeholder.com/200x300?text=Titanic",
    rating: 7.8
  }
];

// Séries
const series = [
  {
    title: "Breaking Bad",
    image: "https://via.placeholder.com/200x300?text=Breaking+Bad",
    rating: 9.5
  },
  {
    title: "Stranger Things",
    image: "https://via.placeholder.com/200x300?text=Stranger+Things",
    rating: 8.7
  },
  {
    title: "Game of Thrones",
    image: "https://via.placeholder.com/200x300?text=GOT",
    rating: 9.2
  }
];

// Fonction d'affichage
function afficher(conteneur, liste) {
  const div = document.getElementById(conteneur);

  liste.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.image}">
      <h3>${item.title}</h3>
      <p>⭐ ${item.rating}</p>
    `;

    div.appendChild(card);
  });
}

// Appel
afficher("films", films);
afficher("series", series);