// write functions for when user interacts with page
// 1. have user hit a button to create a row of underscores that equals the number of letters in word
// 2. 

    var words = ["albedo", "Alpha Centauri", "apastron", "aperature", "aphelion", "apogee", "asterism", "asteroid", "astronaut", "astronomer"
        , "astronomical unit", "astronomy", "axial tilt", "azimuth"]
    var haveWord = false;
    var answerArray = [];


    // Game start button calls generate word function
        document.getElementsByClassName("btn-start-game")[0].onclick = function getWord() {    
            document.getElementsByClassName("word-fillout")[0].textContent = "";
            // document.getElementsByClassName("guesses").empty();
            // document.getElementsByClassName("letters-guessed").empty();
            var guesses = 0;
            var guessLimit = 10;
            var word = words[Math.floor(Math.random() * words.length)];
            word_arr = word.split(""); //array of new word
            haveWord = true;

            for (var i = 0; i < word.length;i++){
                answerArray[i] = "_";
            };
            document.getElementsByClassName("word-fillout")[0].textContent = answerArray;

        // checks user input against word that is loaded
        document.onkeyup = function () {
            if (haveWord){
                var guess = event.key
                var _guesses = [];
                var x = word.indexOf(event.key);
                if (x == -1) {
                    document.getElementsByClassName("guesses")[0].textContent = (++guesses);
                    document.getElementsByClassName("letters-guessed")[0].append(event.key);
                    document.getElementsByClassName("letters-guessed")[0].append(" ");
                    _guesses.push(String.fromCharCode(event.key));
                    console.log(_guesses);
                    }
                    // user guesses correct letter, 
                    // replace letter in answerarray with guess
                        else {
                            answerArray[x] = guess;
                            document.getElementsByClassName("word-fillout")[0].textContent = answerArray;
                            // console.log(answerArray.join(word_arr);
                            
                            alert("you guessed a correct letter!");
                        };
            // document.getElementsByClassName("word-answer")[0].textContent = (x);
            
            };
        };
        document.getElementsByClassName("word-answer")[0].textContent = (word);
    };

