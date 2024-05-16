Documentation pour le Chatbot :

# Chatbot

## Introduction
Ce code implémente une interface de chatbot simple en utilisant HTML, CSS et JavaScript. Le chatbot répond aux requêtes des utilisateurs avec des réponses prédéfinies stockées dans un objet JavaScript appelé `faq`.

## Dépendances
Le chatbot repose sur les ressources externes suivantes :
- Font Awesome (Version 5.15.3) : Utilisé pour afficher des icônes dans l'interface du chatbot.
- Google Fonts : Deux polices sont utilisées dans ce chatbot, à savoir Lato et Montserrat.
- W3.css (Version 4) : Fournit une mise en forme de base pour l'interface du chatbot.

## Utilisation
Pour utiliser le chatbot, suivez ces étapes :
1. Inclure le code HTML, CSS et JavaScript nécessaires dans votre page Web.
2. L'interface du chatbot se compose d'un conteneur de messages, où la conversation est affichée, et d'un champ de saisie pour envoyer des requêtes au chatbot.
3. Les utilisateurs peuvent saisir des questions ou des requêtes dans le champ de saisie et cliquer sur le bouton "Envoyer" pour interagir avec le chatbot.
4. Le chatbot répond aux requêtes avec des réponses prédéfinies trouvées dans l'objet `faq`. S'il ne comprend pas une requête, il répond par "Désolé, je ne comprends pas."

## Style
L'interface du chatbot est stylée à l'aide de CSS. Les messages du chat sont affichés dans des couleurs alternées pour les messages de l'utilisateur et du chatbot, les messages de l'utilisateur étant alignés à droite et ceux du chatbot étant alignés à gauche.

Le conteneur du chat est stylé avec un fond bleu et une couleur de texte dorée, ce qui lui donne un aspect attrayant.

## Fonctionnalité JavaScript
La fonctionnalité du chatbot est implémentée en utilisant JavaScript. Lorsqu'un utilisateur envoie une requête, la fonction `sendMessage()` est appelée.

### Structure des données
Les réponses du chatbot sont stockées dans un objet JavaScript nommé `faq`, où la clé représente l'entrée de l'utilisateur (question/requête) et la valeur représente la réponse du chatbot.

### sendMessage()
Cette fonction est responsable de la gestion de la saisie de l'utilisateur, de l'affichage du message de l'utilisateur dans le chat, de la recherche de la réponse appropriée dans l'objet `faq`, de l'affichage de la réponse du chatbot et de la mise à jour de l'interface du chat.