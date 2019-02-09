var wins = 0;
var losses = 0;
const maxNGuesses = 9;
var guessesLeft = maxNGuesses;
var guessesSoFar = "";
const alphabet = "abcdefghijklmnopqrstuvwxyz";

document.getElementById("wins").textContent = wins;
document.getElementById("losses").textContent = losses;
document.getElementById("guesses-left").textContent = guessesLeft;
document.getElementById("guesses-so-far").textContent = guessesSoFar;

document.onkeydown = function (event) {
    if (guessesLeft === maxNGuesses) {
        computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    var userLetter = event.key.toLowerCase();

    if (userLetter === computerLetter) {
        wins++;
        guessesSoFar = "";
        guessesLeft = maxNGuesses;

    } else {
        guessesLeft--;
        guessesSoFar += userLetter + ", ";

    }

    if (guessesLeft === 0) {
        losses++;
        guessesSoFar = "";

    }

    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guesses-left").textContent = guessesLeft;
    document.getElementById("guesses-so-far").textContent = guessesSoFar;

    if (guessesLeft === 0) {
        guessesLeft = maxNGuesses;

    }

}