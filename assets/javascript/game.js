// write functions for when user interacts with page
// 1. have user hit a button to create a row of underscores that equals the number of letters in word
// 2. 

var words = ["dog","cat","mouse","bird","bat","horse","monkey","spider"]
var haveWord = false;
var answerArray = [];
var wins = 0;
var losses =0;

// Game start button calls generate word function
document.getElementsByClassName("btn-start-game")[0].onclick = function getWord() {
    var guesses = 8;
    var word = words[Math.floor(Math.random() * words.length)];
    word_arr = word.split(""); //array of new word
    haveWord = true;
    var remainingLetters = word.length;

    // builds answerArray with underscores
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
        document.getElementsByClassName("word-fillout")[i] = "_";
    };
    document.getElementsByClassName("word-fillout")[0].textContent = answerArray;

// checks user input against word that is loaded
document.onkeyup = function () {
    if (haveWord) {
        var guess = event.key
        var _guesses = 8;
        var x = word.indexOf(event.key);

        document.getElementsByClassName("letters-guessed")[0].append(event.key);
        document.getElementsByClassName("letters-guessed")[0].append(" ");
        if (x == -1) {
            document.getElementsByClassName("guesses")[0].textContent = (--guesses);
        }
        // user guesses correct letter, 
        // replace letter in answerarray with guess
        else {
            for (var y = 0; y < word.length; y++) {
                if (word[y] == guess) {
                    answerArray[y] = guess;
                    remainingLetters--;
                }
            }
        };
        document.getElementsByClassName("word-fillout")[0].textContent = answerArray;
       

        if (guesses == 0) {
            alert("you lose!");
            document.getElementsByClassName("losses")[0].textContent = ++losses;
            document.getElementsByClassName("word-fillout")[0].textContent = "";
            document.getElementsByClassName("letters-guessed")[0].textContent = " ";
            document.getElementsByClassName("guesses")[0].textContent = " ";
            answerArray = [];
        }


        if (remainingLetters == 0) {
            alert("you win!");
            document.getElementsByClassName("wins")[0].textContent = ++wins;
            document.getElementsByClassName("word-fillout")[0].textContent = "";
            document.getElementsByClassName("letters-guessed")[0].textContent = " ";
            document.getElementsByClassName("guesses")[0].textContent = " ";
        }
    };
};
};
    // display answer for debugging
    // document.getElementsByClassName("word-answer")[0].textContent = (word);

