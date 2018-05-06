function populate() {
    if(quiz.isEnded()) {
        showScores();

    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    gameOverHTML += "<p id='score'> In parts of rural India, there is a myth that women cannot water plants or cook during their period because their “uncleanliness” will spoil the food.The myth goes back to the belief that a woman’s uncleanliness will anger Hindu goddesses. Dispelling myths like chaupadi where 16 percent of women in Nepal are forced from their homes into isolation is a task that will take effort, education and awareness.  </p>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};



// create questions


var questions = [
    new Question("Will Women Contaminate Food?", ["Yes", "No","Maybe"], "No"),
    new Question("Will Showering Cause Infertility ", ["Yes", "No", "Infertility is caused because women do not change their cloth pads"], "Infertility is caused because women do not change their cloth pads"),
    new Question("Girls Can Participate in Class", ["True", "False","Maybe"], "True"),
    new Question("Women Can’t Enter Holy Temples", ["True", "False","Maybe"], "False"),
    new Question("Women Have “Cooties” That Make Men “Sick”", ["True", "False","Maybe"], "False")
   
];


// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();







