function populate() {
    if (quiz.isEnded()) {
        showScores();

    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Pertanyaan " + currentQuestionNumber + " dari " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Hasil Skor</h1>";

    gameOverHTML += "<h2 id='score'> Jumlah Skor Anda: " + quiz.score + "/10</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};




// create questions
var questions = [
    new Question("Sebuah perangkat keras (hardware) pada komputer yang berfungsi sebagai alat untuk input data yang berupa huruf, angka dan simbol yaitu ?", ["Mouse", "Keyboard", "Printer", "Scanner"], "Keyboard"),
    new Question("Mesin tik/keyboard pertama kali ditemukan pada tahun ?", ["1866", "1867", "1868", "1869"], "1868"),
    new Question("Penemu mesin tik pertama kali adalah  ?", ["Christopher Latham Sholes", "Christian Latham Sholes", "Christopher Latham Scholes", "Douglas Engleberd"], "Christopher Latham Sholes"),
    new Question("Yang bukan elemen-elemen pada keyboard yaitu ?", ["Numeric key", "Alphanumeric key", "Typewriter key", "Function key"], "Alphanumeric key"),
    new Question("Key yang terdiri dari F1 sampai dengan F12 adalah ? ", ["Numeric key", "Alphanumeric key", "Function key", "Typewriter key"], "Function key"),
    new Question("Yang termasuk jenis-jenis keyboard komputer secara fisik adalah ?", ["Keyboard Qwerty", "Keyboar Dvorak", "Keyboard Wireless", "Keyboard Alphabetic"], "Keyboard Wireless"),
    new Question("Jenis keyboard yang menggunakan DIN 5 Male yaitu ? ", ["Keyboard Serial", "Keyboard USB", "Keyboard Wireless", "Keyboard Numeric"], "Keyboard Serial"),
    new Question("Jenis keyboard yang ditemukan oleh Scholes, Gilden, dan Saule adalah ?", ["Keyboard Dvorak", "Keyboard Numeric", "Keyboard Qwerty", "Keyboard Alphabetic"], "Keyboard Qwerty"),
    new Question("Tombol untuk membatalkan suatu perintah dari suatu menu ?", ["Delete", "Esc", "Backspace", "Tab"], "Esc"),
    new Question("Jenis bentuk tombol keyboard yang sering digunakan untuk saat ini adalah ?", ["Keyboard Alphanumeric", "Keyboard Qwerty", "Keyboard Alphabetic", "Keyboard Dvorak"], "Keyboard Qwerty")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();