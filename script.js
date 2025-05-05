const quotes = [
  {
    quote: "Le plus grand risque est de ne prendre aucun risque.",
    author: "Mark Zuckerberg",
  },
  {
    quote: "Ils ne savaient pas que c'était impossible, alors ils l'ont fait.",
    author: "Mark Twain",
  },
  {
    quote:
      "La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre.",
    auteur: "Albert Einstein",
  },
  {
    quote: "Le succès, c’est tomber sept fois, se relever huit.",
    author: "Proverbe japonais",
  },
  {
    quote: "Fais de ta vie un rêve, et d’un rêve, une réalité.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    quote: "L’imagination est plus importante que le savoir.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Commencez par changer en vous ce que vous voulez changer autour de vous.",
    author: "Gandhi",
  },
  {
    quote: "L’action est la clé fondamentale de tout succès.",
    author: "Pablo Picasso",
  },
  {
    quote:
      "Ce n’est pas parce que les choses sont difficiles que nous n’osons pas, c’est parce que nous n’osons pas qu’elles sont difficiles.",
    author: "Sénèque",
  },
  {
    quote: "Rêve grand, commence petit. Mais surtout, commence.",
    author: "Simon Sinek",
  },
];

function newQuote() {
  const citation = quotes[Math.floor(Math.random() * quotes.length + 1)];
  document.getElementById("quote").textContent = citation.quote;
  document.getElementById("author").textContent = `- ${citation.author}`;
}
