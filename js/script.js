// Données des accords mets et vins
const data = [
  { plat: "foie gras", vin: "Sauternes" },
  { plat: "huîtres", vin: "Muscadet" },
  { plat: "saumon fumé", vin: "Chablis" },
  { plat: "escargots", vin: "Bourgogne Aligoté" },
  { plat: "rillettes", vin: "Chinon" },
  { plat: "coq au vin", vin: "Bourgogne Pinot Noir" },
  { plat: "boeuf bourguignon", vin: "Côte de Nuits" },
  { plat: "cassoulet", vin: "Cahors" },
  { plat: "ratatouille", vin: "Côtes de Provence rosé" },
  { plat: "bouillabaisse", vin: "Cassis" },
  { plat: "magret de canard", vin: "Madiran" },
  { plat: "choucroute", vin: "Riesling" },
  { plat: "filet mignon", vin: "Saint-Émilion" },
  { plat: "poulet rôti", vin: "Bourgogne blanc" },
  { plat: "curry", vin: "Gewurztraminer" },
  { plat: "sushis", vin: "Sauvignon Blanc" },
  { plat: "fromages", vin: "Bordeaux rouge" },
  { plat: "chèvre", vin: "Sancerre" },
  { plat: "brie", vin: "Chardonnay" },
  { plat: "camembert", vin: "Cidre brut" },
  { plat: "roquefort", vin: "Sauternes" },
  { plat: "comté", vin: "Vin jaune du Jura" },
  { plat: "tarte tatin", vin: "Cidre brut" },
  { plat: "chocolat", vin: "Banyuls" },
  { plat: "mousse au chocolat", vin: "Maury" },
  { plat: "crème brûlée", vin: "Monbazillac" },
  { plat: "tiramisu", vin: "Marsala" },
  { plat: "café gourmand", vin: "Rivesaltes" },
  { plat: "pizza", vin: "Chianti" },
  { plat: "barbecue", vin: "Syrah" },
  { plat: "saucisses", vin: "Côtes-du-Rhône" },
  { plat: "salade niçoise", vin: "Côtes de Provence rosé" },
  { plat: "lasagnes", vin: "Chianti" }
];

// Configuration de Fuse.js
const options = {
  keys: ['plat'],  // Cherche uniquement sur le champ 'plat'
  threshold: 0.4   // Niveau de "tolérance" pour la correspondance floue
};

// Initialisation de Fuse
const fuse = new Fuse(data, options);

// Fonction de recherche
function rechercherPlat() {
  const userInput = document.getElementById("user-input").value;
  const resultats = fuse.search(userInput);
  
  let reponse = "Aucun accord trouvé.";
  
  if (resultats.length > 0) {
    const vinRecommande = resultats[0].item.vin;
    reponse = `Je vous recommande un ${vinRecommande} avec votre ${resultats[0].item.plat}.`;
  }
  
  afficherMessageUtilisateur(userInput);
  afficherMessageBot(reponse);
}

// Affiche le message de l'utilisateur
function afficherMessageUtilisateur(message) {
  const chatMessages = document.getElementById("chat-messages");
  const userMessage = document.createElement("div");
  userMessage.classList.add("user-message");
  userMessage.innerHTML = `<span>${message}</span>`;
  chatMessages.appendChild(userMessage);
}

// Affiche la réponse du bot
function afficherMessageBot(message) {
  const chatMessages = document.getElementById("chat-messages");
  const botMessage = document.createElement("div");
  botMessage.classList.add("bot-message");
  botMessage.innerHTML = `<span>${message}</span>`;
  chatMessages.appendChild(botMessage);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remplacer la fonction sendMessage()
document.getElementById("user-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    rechercherPlat();
  }
});
