var questions = [
{currentQ: "What is another name for the creature Gollum?",
aA:"Frodo",
aB:"Mary",
aC:"Smeagle",
aD:"Pippin",
answer:"Smeagle"},
{currentQ: "What color is the wizard Sauramon's robes?",
aA:"Blue",
aB:"Brown",
aC:"Grey",
aD:"White",
answer:"White"},
{currentQ: "What is the ranger Stryder's real name?",
aA:"Aragorn",
aB:"Gandalf",
aC:"Gimili",
aD:"Legolas",
answer:"Aragorn"},
{currentQ: "Where was the one ring made?",
aA:"Rivendale",
aB:"Gondor",
aC:"Mordor",
aD:"Erebor",
answer:"Mordor"},
{currentQ: "What creature kills Gandalf?",
aA:"Orc",
aB:"Balrog",
aC:"Goblin",
aD:"Nazgul",
answer:"Balrog"}
]
var cQ = 0;
var correct = 0;
var answer;
var timeLeft = 60;
var timerId;



$( document ).ready(function(){

	function countdown(){
		if(timeLeft == 0){
			end()
		}else{
			$("#Time-Remaining").text("Time Left: "+ timeLeft);
			timeLeft--;
		}
	}

  $("#retry").hide();

  $("#Ready").click(function(){

		timerId = setInterval(countdown,1000);
    $(".answer").empty();
    $("#Question").empty();
    $("#Time-Remaining").empty();
    $("#Ready").hide();
    $("#score").hide();
    setTimeout(Question,500);

  });
  function Question(){
    console.log(cQ)
    console.log(correct);
		$(".answer").show();
		$("#Question").show();
    $("#Question").text(questions[cQ].currentQ);
    $("#A").text(questions[cQ].aA);
    $("#B").text(questions[cQ].aB);
    $("#C").text(questions[cQ].aC);
    $("#D").text(questions[cQ].aD);
    var answerCheck = (questions[cQ].answer);
    $("#A").unbind('click').click(function() {
      answer = $("#A").text();
      if(answer == answerCheck){
        console.log("Yay");
        correct ++;
        cQ ++;
      }else{
        cQ ++;
      }
      if (cQ >= 5){
        end();
      }else{
        Question();
      }
    });
    $("#B").unbind('click').click(function() {
      answer = $("#B").text();
      if(answer == answerCheck){
        console.log("Yay");
        correct ++;
        cQ ++;
      }else{
        cQ ++;
      }
      if (cQ >= 5){
        end();
      }else{
        Question();
      }
    });
    $("#C").unbind('click').click(function() {
      answer = $("#C").text();
      if(answer == answerCheck){
        console.log("Yay");
        correct ++;
        cQ ++;
      }else{
        cQ ++;
      }
      if (cQ >= 5){
        end();
      }else{
        Question();
      }
    });
    $("#D").unbind('click').click(function() {
      answer = $("#D").text();
      if(answer == answerCheck){
        console.log("Yay");
        correct ++;
        cQ ++;
      }else{
        cQ ++;
      }
      if (cQ >= 5){
        end();
      }else{
        Question();
      }
    });
  };
  function end(){
		clearTimeout(timerId);
		$("#Time-Remaining").hide();
		$("#Question").hide();
    $("#score").show();
    $("#score").text("You got "+ correct +" out of "+questions.length+" correct!")
    $(".answer").hide();
    $("#Ready").show();
    $("#retry").show();
    cQ = 0;
    correct = 0;
    $("#Ready").click(function(){
			timeLeft = 60
      $(".answer").empty();
      $("#Question").empty();
      $("#Time-Remaining").show();
      $("#Ready").hide();
      $("#score").hide();
      $("#retry").hide();
			setTimeout(Question,500);
			
  
    });
  };
});
