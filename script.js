$(document).ready(function() {
    
//GLOBAL VARIABLES//
    var numberCorrect = 0;
    var currentQuestion = 0;
    var previousQuestion = currentQuestion - 1;
    
//QUESTIONS ARRAY//
   	var questions = [{
        question: "The Teenage Mutant Ninja Turtles are named after famous . . .",
        choices: ["Law men", "Artists", "Skateboaders", "Rappers"],
        qNum : 0,
        correct : 1,
        fact: "Leo, Mike, Raph and Don are all named after famous renaissance artists"
        },
        {
        question: "Master Yoshi as he was formerly known is now know as . . .",
        choices: ["Shredder", "Crusher", "Splinter", "Night Wing"],
        qNum : 1,
        correct : 2,
        fact: "After he became the turles mentor he became known as Splinter"
        },
        {
        question: "Beebop and Rocksteady are a  . . .",
        choices: ["Gator and Gorilla", "Warthog and Snake", "Rhino and Fox", "Warthog and Rhino"],
        qNum : 2,
        correct : 3,
        fact: "Villians Beebop and Rocksteady are a mutant Warthog and Rhino"
        },
        {
        question: "Teenage Mutant Ninja Turtles takes place in . . .",
        choices: ["Los Angelas", "London", "New York", "Philly"],
        qNum : 3,
        correct : 2,
        fact: "TMNT takes place in NYC, mostly, they do go back in time at some point BUT save that for another time"
        },
        {
        question: "Stockgen manufactures . . .",
        choices: ["Mutants", "Robots", "Weapons", "Ammo"],
        qNum : 4,
        correct : 1,
        fact: "Stockgen is a company that makes Robots"
    	},
        {
        question: "The Turtles like . . .",
        choices: ["Pizza", "Sushi", "Beer", "Salad"],
        qNum : 5,
        correct : 0,
        fact: "Pizza, of course"
    }]

//ENTER BUTTON EVENT//
    $("#introDiv").on("click", "#enter", function (event) {
        $("#introDiv").fadeOut();
        $('#questionDiv').fadeIn();
        loadQuestion();
        imgChange();
        event.preventDefault();
    });

//SUBMIT BUTTON EVENT//
    $("#questionDiv").on("click", "#submit", function (event) {
        answerCheck();
        event.preventDefault();
    });

//CONT BUTTON EVENT//
    $("#resultDiv").on("click", "#cont", function (event) {
        if (currentQuestion < 5) {
            currentQuestion++;
            loadQuestion();
            imgChange();
            $('#resultDiv').fadeOut();
            $('.resultNegative').fadeOut();
            $('.resultPositive').fadeOut();
            $('#questionDiv').fadeIn();
        }else{
            $('#questionDiv').fadeOut();
            $('#resultDiv').fadeOut();
            $('.resultNegative').fadeOut();
            $('.resultPositive').fadeOut();
            $('#endDiv').slideDown();
            $("#result").html("You correctly answered " +numberCorrect+ " out of 6");
        };
        event.preventDefault();
    });

//RETRY BUTTON EVENT//
    $("#endDiv").on("click", "#retry", function (event) {
        retry();
        event.preventDefault();
    });

//LOAD QUESTION FUNCTION//
    function loadQuestion() { 
            var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span></br><div id="answerSelect"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div>';
            $("#questionArea").html(newQuestion);   
    };

//ANSWER CHECK FUNCTION//
    function answerCheck() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == undefined) {
                alert('Please select an answer');
        }else if (answer == questions[currentQuestion].correct){
                console.log("Correct!");
                numberCorrect++;
                $('#questionDiv').fadeOut();
                $('#resultDiv').fadeIn();
                $('.resultPositive').fadeIn();
                $("#explain").html("<p>"+questions[currentQuestion].fact+"</p>");
        }else{
                console.log("Wrong");
                $('#questionDiv').fadeOut();
                $('#resultDiv').fadeIn();
                $('.resultNegative').fadeIn();
                $("#explain").html("<p>"+questions[currentQuestion].fact+"</p>");
        };
    }
    
//IMAGE CHANGE FUNCTION//
    function imgChange() {
    	if (currentQuestion == 0) {
    		document.getElementById("charIcon").src = "images/don.png";
    	} else if (currentQuestion == 1){
    		document.getElementById("charIcon").src = "images/leo.png";
    	} else if (currentQuestion == 2){
    		document.getElementById("charIcon").src = "images/mike.png";
    	} else if (currentQuestion == 3){
    		document.getElementById("charIcon").src = "images/ralp.png";
    	} else if (currentQuestion == 4){
    		document.getElementById("charIcon").src = "images/don.png";
    	} else if (currentQuestion == 5){
    		document.getElementById("charIcon").src = "images/leo.png";
    	};
    }

//RETRY FUNCTION//
    function retry() {
        numberCorrect = 0;
        currentQuestion = 0;
        $("#introDiv").fadeIn();
        $('#endDiv').fadeOut();
    }

});	


