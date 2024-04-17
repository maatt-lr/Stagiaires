
const readline = require('readline');

// Création de l'interface readline pour l'entrée de la ligne de commande
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fonction pour déterminer l'appréciation en fonction de la note
const getAppreciation = (note) => {
  if (note >= 0 && note < 4) {
    return 'Insuffisant';
  } else if (note >= 4 && note < 8) {
    return 'Médiocre';
  } else if (note >= 8 && note < 12) {
    return 'Assez Bien';
  } else if (note >= 12 && note < 16) {
    return 'Bien';
  } else if (note >= 16 && note <= 20) {
    return 'Très Bien';
  } else {
    return 'Note invalide';
  }
};

// Fonction pour demander la note à l'utilisateur
const askForNote = () => {
    rl.question('Entrez votre note (0 à 20) ou "exit" pour quitter: ', (input) => {
      // Vérifier si l'utilisateur veut quitter
      if (input.toLowerCase() === 'exit') {
        rl.close();
        return;
      }
  
      const note = parseFloat(input);
  
      // Vérifier si la note entrée est valide
      if (isNaN(note) || note < 0 || note > 20) {
        console.log('Vous avez entré une note invalide !');
      } else {
        const appreciation = getAppreciation(note);
        console.log("Votre appréciation est : " + appreciation);
      }
  
      // Redemander la note
      askForNote();
    });
  };
  
  // Commencer par demander la note
  askForNote();

