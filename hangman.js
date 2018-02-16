var userText = document.getElementById("game");
var artists = ["Drake", "Ed Sheran", "Bruno Mars", "Cardi B", "Camila Cabello", "Young Thug", "Post Malone", "21 Savage", "The Weekend", "Kendrick Lamar", "Dua Lipa", "Eminem"];
var lives = 0;
var index = Math.floor((Math.random() * artists.length));
var word = artists[index].toUpperCase();
var wrongGuesses = [];
var blanks = [];
wins = 0;

function startUp() {
    lives = 0;
    index = Math.floor((Math.random() * artists.length));
    word = artists[index].toUpperCase();
    wrongGuesses = [];
    blanks = [];
   
    for (var i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            blanks[i] = "-";
        } else {
            blanks[i] = "_";
        }
        var displayWord = blanks.join(" ");
        document.getElementById("letters").innerHTML = displayWord;
        document.getElementById("wins").innerHTML = "wins : " + wins;
    }
}

document.onkeyup = function (event) {
    var guessedRight = false;
    var userGuess = event.key.toUpperCase();

    for (var i = 0; i < word.length; i++) {
        if (userGuess === word[i]) {
            blanks[i] = userGuess;
            document.querySelector("#result").innerHTML = "Ju gussed right";
            guessedRight = true;
        }
    }
    document.getElementById("letters").innerHTML = blanks.join(" ");

    if (guessedRight === false && wrongGuesses.indexOf(userGuess) === -1) {
        wrongGuesses[lives] = userGuess;
        lives++;
        document.querySelector("#lives").innerHTML = "You have " + (5 - lives) + " lives left";
        document.querySelector("#result").innerHTML = "You guessed wrong";
        document.querySelector("#guesses").innerHTML = "Wrong guesses so far " + wrongGuesses;
    }

    if (lives > 4) {
        document.querySelector("#result").innerHTML = "aww you lost! The word was " + word;
        spotify();
        startUp();
    }
    if (blanks.indexOf("_") === -1) {
        document.querySelector("#result").innerHTML = "You won... hooray!";
        spotify();
        wins++;
        startUp();

    }

    function spotify() {
        switch (word) {
            case 'DRAKE':
                document.querySelector("#spotify").innerHTML = '<iframe src="https://open.spotify.com/embed/artist/3TVXtAsR1Inumwj472S9r4" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
                break;
            case 'ED SHERAN':
                document.querySelector("#spotify").innerHTML = '<iframe src="https://open.spotify.com/embed/artist/6eUKZXaKkcviH0Ku9w2n3V" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
                break;
            case 'BRUNO MARS':
                document.querySelector("#spotify").innerHTML = '<iframe src="https://open.spotify.com/embed/artist/0du5cEVh5yTK9QJze8zA0C" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
                break;
            case 'CARDI B':
                document.querySelector("#spotify").innerHTML = '<iframe src="https://open.spotify.com/embed/artist/4kYSro6naA4h99UJvo89HB" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
                break;
            case 'CAMILA CABELLO':
                document.querySelector("#spotify").innerHTML = '<iframe src="https://open.spotify.com/embed/artist/4nDoRrQiYLoBzwC5BhVJzF" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
                break;
            case 'YOUNG THUG':
                document.querySelector("#spotify").innerHTML = '<iframe src="https://open.spotify.com/embed/artist/50co4Is1HCEo8bhOyUWKpn" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
                break;
            case 'POST MALONE':
                document.querySelector("#spotify").innerHTML = '<iframe src="https://open.spotify.com/embed/artist/246dkjvS1zLTtiykXe5h60" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
                break;
            case '21 SAVAGE':
                document.querySelector("#spotify").innerHTML = '<iframe src="https://open.spotify.com/embed/artist/1URnnhqYAYcrqrcwql10ft" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
                break;
            case 'KENDRICK LAMAR':
                document.querySelector("#spotify").innerHTML = '<iframe src="https://open.spotify.com/embed/artist/2YZyLoL8N0Wb9xBt1NhZWg" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
                break;
            case 'EMINEM':
                document.querySelector("#spotify").innerHTML = '<iframe src="https://open.spotify.com/embed/artist/7dGJo4pcD2V6oG8kP0tJRR" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
                break;
            case 'DUA LIPA':
                document.querySelector("#spotify").innerHTML = '<iframe src="https://open.spotify.com/embed/artist/6M2wZ9GZgrQXHCFfjv46we" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
                break;
            case 'THE WEEKEND':
                document.querySelector("#spotify").innerHTML = '<iframe src="https://open.spotify.com/embed/artist/1Xyo4u8uXC1ZmMpatF05PJ" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }

    }
}