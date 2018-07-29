// write functions for when user interacts with page
// 1. have user hit a button to create a row of underscores that equals the number of letters in word
// 2. 

var words = ["dog", "cat", "mouse", "bird", "bat", "horse", "monkey", "spider"]
var haveWord = false;
var answerArray = [];
var guessArray = [];
var wins = 0;
var losses = 0;
var guesses = 9;


// activates game
document.getElementsByClassName("btn-start")[0].onclick = function getWord() {
    this.style.display = "hidden"

    var word = words[Math.floor(Math.random() * words.length)];
    word_arr = word.split(""); //array of new word
    haveWord = true;
    var remainingLetters = word.length;
    console.log(word);

    // builds answerArray with underscores
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
        document.getElementsByClassName("word-fillout")[i] = "_";
    };

    document.getElementsByClassName("word-fillout")[0].textContent = answerArray.join(" ");
    // Game start button calls generate word function
    document.onkeyup = function () {
        var guess = event.key
        var x = word.indexOf(event.key);
        console.log(guess)

        // if letter has not been guesses proceed, if it has ignore it
        if (guessArray.indexOf(guess) === -1){
            guessArray.push(guess)
            document.getElementsByClassName("letters-guessed")[0].append(guess);
            document.getElementsByClassName("letters-guessed")[0].append(" ");

            // user guesses wrong letter
            if (x == -1) {
                document.getElementsByClassName("guesses")[0].textContent = (--guesses);
            }
            // user guesses correct letter, 
            // replace letter in answerArray with guess
            else {
                for (var y = 0; y < word.length; y++) {
                    if (word[y] == guess) {
                        answerArray[y] = guess;
                        remainingLetters--;
                    }
                }
            };
        } 
        document.getElementsByClassName("word-fillout")[0].textContent = answerArray.join(" ");

        if (guesses == 0) {
            alert("you lose!");
            document.getElementsByClassName("losses")[0].textContent = ++losses;
            document.getElementsByClassName("word-fillout")[0].textContent = "";
            document.getElementsByClassName("letters-guessed")[0].textContent = " ";
            document.getElementsByClassName("guesses")[0].textContent = " ";
            answerArray = [];
            guesses = 8;
            guessArray = [];
            keyLogger = [];
            document.getElementsByClassName("btn-start")[0].display = "visible"
            getWord()
        }

        if (remainingLetters == 0) {
            alert("you win!");
            document.getElementsByClassName("wins")[0].textContent = ++wins;
            document.getElementsByClassName("word-fillout")[0].textContent = "";
            document.getElementsByClassName("letters-guessed")[0].textContent = " ";
            document.getElementsByClassName("guesses")[0].textContent = " ";
            answerArray = [];
            guesses = 8;
            guessArray = [];
            keyLogger = [];
            document.getElementsByClassName("btn-start")[0].display = "visible"
            getWord()

        }
    }
};

    // display answer for debugging
    // document.getElementsByClassName("word-answer")[0].textContent = (word);

