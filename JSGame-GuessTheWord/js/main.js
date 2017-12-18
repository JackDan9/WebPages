/**
 * Created by JackDan9 on 2017/10/6.
 */
window.onload = function () {
    var words = [
        "javascript",
        "monkey",
        "amazing",
        "pancake"
    ];
    var showText = '';
    for(var x = 0; x < words.length; x++) {
        showText = showText + words[x] + '<br />';
    }
    var shows = document.getElementById("show");
    shows.innerHTML = showText;
    var word = words[Math.floor(Math.random() * words.length)];
    var answerArray = [];
    for(var i = 0; i < word.length; i++) {
        answerArray[i] = "-";
    }
    var remainingLetters = word.length;
    var warnCon = document.getElementById("warnCon");
    warnCon.innerHTML = answerArray.join(" ");
    document.getElementById("sure").onclick = function () {
        var guess = document.getElementById("word").value;
        console.log(remainingLetters);
        while(remainingLetters > 0) {
            warnCon.innerHTML = answerArray.join(" ");
            if(guess === null) {
                break;
            } else if( guess.length !== 1 ) {
                var errorCon = document.getElementById("errorCon");
                errorCon.setAttribute("style", "display: inline-block;");
                setTimeout(function () {
                    errorCon.setAttribute("style", "display: none;");
                }, 1500);
            } else {
                for(var j = 0; j < word.length; j++) {
                    if(word[j] === guess) {
                        answerArray[j] = guess;
                        remainingLetters --;
                        console.log(remainingLetters);
                    }
                }
            }
        }
        warnCon.innerHTML = answerArray.join(" ");
    }
}

