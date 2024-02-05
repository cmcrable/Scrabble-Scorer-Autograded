// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let response = input.question(`Let's play some scrabble! \n\nEnter a word to score: `);
   //console.log(oldScrabbleScorer(response));
   return response;
};

// original line:  let simpleScorer;
//let simpleScorer;

// New function for simpleScorer 
function simpleScorer(word) {
   word = word.toUpperCase();
   let letterPoints = "";

   for (let i = 0; i < word.length; i++) {
      if (simpleScorer[pointValue].includes(word[i])) {
         letterPoints += 1;
      }
   }
   return letterPoints;
}

// orignal line:  let vowelBonusScorer;
//let vowelBonusScorer;
   /*
   1: ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'],
   3: ['A', 'E', 'I', 'O', 'U'],
   */

// New function for vowelBonusScorer
function vowelBonusScorer(word) {
   word = word.toUpperCase();
   let letterPoints = "";

   for (let i = 0; i < word.length; i++) {
 
      for (const pointValue in vowelBonusScorer) {
  
        if (vowelBonusScorer[pointValue].includes(word[i])) {
          letterPoints += `Points for '${word[i]}': ${pointValue}\n`
        }
  
      }
    }
    return letterPoints; 
}

// original line:   let scrabbleScorer;
//let scrabbleScorer;
function scrabbleScorer(word) {
   oldScrabbleScorer(word);
}

// original scoringAlgorithms
// const scoringAlgorithms = ['simpleScorerObj','vowelBonusScorerObj','scrabbleScorerObj'];

const scoringAlgorithms = [
   simpleScorerObj = {
      name: 'Simple Score',
      description: 'Each letter is worth 1 point.',
      scoringFunction: 'simpleScorer'
   },

   vowelBonusScorerObj = {
      name: 'Bonus Vowels',
      description: 'Vowels are 3 pts, consonants are 1 pt.',
      scoringFunction: 'vowelBonusScorer'
   },

   scrabbleScorerObj = {
      name: 'Scrablle',
      description: 'The traditional scoring algorithm.',
      scoringFunction: 'scrabbleScorer'
   }
];

function scorerPrompt() {
   let scoreType = input.question(`Which scoring algorithm would you like to use? \n\n
   0 - Simple: One point per character
   1 - Vowel Bonus: Vowels are worth 3 points
   2 - Scrabble: Uses scrabble point system
   Enter 0, 1, or 2: `);

   if (Number(scoreType) === 0) {
      console.log(typeof(scoreType),scoreType)
      return scoringAlgorithms[scoreType].scoringFunction;
   } else if (Number(scoreType) === 1) {
      console.log(typeof(scoreType),scoreType)
      return scoringAlgorithms[scoreType].scoringFunction;
   } else if (Number(scoreType) === 2) {
      console.log(typeof(scoreType),scoreType)
      return scoringAlgorithms[scoreType].scoringFunction;
   } else
      console.log('Invalid Entry: Please Try Again.\n');
      scoreType = input.question(`Which scoring algorithm would you like to use? \n\n
      0 - Simple: One point per character
      1 - Vowel Bonus: Vowels are worth 3 points
      2 - Scrabble: Uses scrabble point system
      Enter 0, 1, or 2: `); 
};

function transform(pointStructure) {};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   //scorerPrompt()
   oldScrabbleScorer(initialPrompt());
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
