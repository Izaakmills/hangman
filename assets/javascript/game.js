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
                var _guesses = [];
                if (word.indexOf(event.key) == -1) {
                    document.getElementsByClassName("guesses")[0].textContent = (++guesses);
                    // alert(guesses);
                    document.getElementsByClassName("letters-guessed")[0].append(event.key).append(" ");
                    _guesses.push(String.fromCharCode(event.key));
                    console.log(_guesses);
                    }
                        else {
                            alert("you guessed a correct letter!");
                        };
            };

            // for (var i = 0; i < word.length; i++) {
            //     console.log(word.charAt(i));
            // };
        };
    };

