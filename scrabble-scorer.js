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

let simplePoints = {
   1: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
};

function simpleScorer(word) {
   word = word.toUpperCase();
   let letterPoints = 0;

   for (const pointValue in simplePoints) {

      for (let i = 0; i < word.length; i++) {
         if (simplePoints[pointValue].includes(word[i])) {
            letterPoints += 1;
         }
      }
   }
   return letterPoints;
};

let vowelBonusPoints = {
   1: ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'],
   3: ['A', 'E', 'I', 'O', 'U']
};

// New function for vowelBonusScorer
function vowelBonusScorer(word) {
   word = word.toUpperCase();
   let letterPoints = 0;

   for (let i = 0; i < word.length; i++) {
 
      for (const pointValue in vowelBonusPoints) {
  
        if (vowelBonusPoints[pointValue].includes(word[i])) {
          // letterPoints += `Points for '${word[i]}': ${pointValue}\n` --->> old
          letterPoints += Number(pointValue);
        }
  
      }
    }
    return letterPoints; 
};

function scrabbleScorer(word) {
   word = word.toLowerCase();
   let letterPoints = 0;

   for (let i = 0; i < word.length; i++) {
      letterPoints += newPointStructure[word[i]];
   }
   return letterPoints;
};

const scoringAlgorithms = [
   {
      name: 'Simple Score',
      description: 'Each letter is worth 1 point.',
      scorerFunction: simpleScorer
   },

   {
      name: 'Bonus Vowels',
      description: 'Vowels are 3 pts, consonants are 1 pt.',
      scorerFunction: vowelBonusScorer
   },

   {
      name: 'Scrabble',
      description: 'The traditional scoring algorithm.',
      scorerFunction: scrabbleScorer
   }
];

function scorerPrompt() {
   let scoreType = input.question(`Which scoring algorithm would you like to use? \n\n
   0 - Simple: One point per character
   1 - Vowel Bonus: Vowels are worth 3 points
   2 - Scrabble: Uses scrabble point system
   Enter 0, 1, or 2: `);

   if (Number(scoreType) === 0) {
      return scoringAlgorithms[scoreType].scorerFunction;
   } else if (Number(scoreType) === 1) {
      return scoringAlgorithms[scoreType].scorerFunction;
   } else if (Number(scoreType) === 2) {
      return scoringAlgorithms[scoreType].scorerFunction;
   }
};

function transform(pointStructure) {
   //use for..in loops to iterate over keys within the object
   //create new object
   let newScoringObject = {};
   for (let key in pointStructure) {
      for (let i = 0; i < pointStructure[key].length; i++) {
          newScoringObject[pointStructure[key][i].toLowerCase()] = Number([key]);
      }
   }
   return newScoringObject;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let userReply = initialPrompt();
   let selectedFunction = scorerPrompt(userReply);
   console.log(`\nScore for '${userReply}': ${selectedFunction(userReply)}`);
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
