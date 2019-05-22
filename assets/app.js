var answer= ""
var unAnswered = 10
var correctAnswer= 0
var incorrectAnswer=0
var correctAnswers = ["Liza","Scranton","K","Phyllis","Phillip","Dwight","Garden", "Michael", "9", "Kelly"]
var timer=0;


$("#startGame").click(function(){
    startGame()
    var timeRemaining=30;
    timer= setInterval(function(){
        document.getElementById("timer").innerHTML=timeRemaining + " seconds";
        timeRemaining -= 1;
        if(timeRemaining<=0){
            endGame()
        }
    },1000);
    })
$('.custom-control-input').click(function(event){
    var answer= event.target.value
    console.log(event.target.value)
    for(var i=0; i< correctAnswers.length; i++)
    {
        if(answer===correctAnswers[i]){
          correctAnswer+=1;
          return
        }
    } 
    incorrectAnswer+=1;
    });
    function startGame(){
        answer= ""
        unAnswered = 10
        correctAnswer= 0
        incorrectAnswer=0
        correctAnswers = ["Liza","Scranton","K","Phyllis","Phillip","Dwight","Garden", "Michael", "9", "Kelly"]
        timer=0;
        document.getElementById("correct").innerHTML= "Correct Answers: "+ correctAnswer;
        document.getElementById("incorrect").innerHTML= "Incorrect Answers: "+ incorrectAnswer;
        document.getElementById("notAnswered").innerHTML= "Not Answered: 0 ";
        $('.costom-control-input').prop("checked", false)
        $("#questions").css("display", "block")
    }
    
    $("#endGame").click(endGame)
    
    function endGame(){
        unAnswered=unAnswered-correctAnswer-incorrectAnswer
        clearInterval(timer);
        document.getElementById("timer").innerHTML= "Results Below!"
        document.getElementById("correct").innerHTML= "Correct Answers: "+ correctAnswer;
        document.getElementById("incorrect").innerHTML= "Incorrect Answers: "+ incorrectAnswer;
        document.getElementById("notAnswered").innerHTML= "Not Answered:  " + unAnswered;
        $("#questions").css("display", "none")
    }
    
    