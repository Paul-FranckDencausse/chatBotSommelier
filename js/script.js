var faq = {
    "foie gras": "Le foie gras est délicieux avec un verre de Sauternes (vin blanc moelleux). Vous allez adorer cette combinaison !",
    "huîtres": "Pour accompagner des huîtres, je recommande un Muscadet (vin blanc sec). C'est un accord classique et savoureux.",
    "saumon fumé": "Avec du saumon fumé, un Chablis (vin blanc sec) fera des merveilles. Un régal pour les papilles !",
    "coq au vin": "Le coq au vin se marie parfaitement avec un Bourgogne rouge (Pinot Noir). Profitez de ce classique français !",
    "boeuf bourguignon": "Pour un boeuf bourguignon, optez pour un Côte de Nuits (vin rouge de Bourgogne). Un vrai délice !",
    "cassoulet": "Un cassoulet se déguste idéalement avec un Cahors (Malbec). Un mariage riche en saveurs !",
    "ratatouille": "La ratatouille est parfaite avec un Côtes de Provence rosé. Un accord frais et estival !",
    "bouillabaisse": "Pour une bouillabaisse, un Cassis (vin blanc sec) est un choix excellent. Une harmonie parfaite !",
    "magret de canard": "Avec du magret de canard, je vous conseille un Madiran (vin rouge tannique). Un accord robuste et savoureux !",
    "choucroute": "La choucroute se marie bien avec un Riesling (vin blanc d'Alsace). Un duo classique et délicieux !",
    "fromages": "Pour les fromages, un Bordeaux rouge (Cabernet Sauvignon, Merlot) est parfait. Pour le Roquefort, essayez un Sauternes.",
    "tarte tatin": "La tarte Tatin est délicieuse avec un cidre brut ou un vin de dessert comme le Coteaux du Layon. Un vrai délice sucré !"
  };
  
  function sendMessage() {
    var userInput = document.getElementById("user-input").value.toLowerCase();
    var chatMessages = document.getElementById("chat-messages");
    
    // Afficher la question de l'utilisateur
    var userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    var userMessageContent = document.createElement("span");
    userMessageContent.textContent = userInput;
    userMessage.appendChild(userMessageContent);
    chatMessages.appendChild(userMessage);
  
    // Rechercher les mots-clés dans la phrase de l'utilisateur
    var answer = "Désolé, je ne comprends pas. Pourriez-vous reformuler ?";
    for (var key in faq) {
      if (userInput.includes(key)) {
        answer = faq[key];
        break;
      }
    }
  
    // Afficher la réponse
    var botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    var botMessageContent = document.createElement("span");
    botMessageContent.innerHTML = answer;
    botMessage.appendChild(botMessageContent);
    chatMessages.appendChild(botMessage);
  
    // Effacer l'entrée utilisateur
    document.getElementById("user-input").value = "";
  
    // Défiler vers le bas pour afficher la dernière réponse
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  // Ajout de l'événement pour la touche "Entrée"
  document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Évite d'ajouter une nouvelle ligne dans l'input
      sendMessage();
    }
  });
  