var player1 = localStorage.getItem("player1");
var player2 = localStorage.getItem("player2");
var numb1 = document.getElementById("player1").value;
var numb2 = document.getElementById("player2").value;
var actual_ans = parseInt(numb1) * parseInt(numb2);
var player1sc = 0;
var player2sc = 0;



document.getElementById("name1").innerHTML = player1 + " : ";
document.getElementById("output1").innerHTML = player1sc;


document.getElementById("name2").innerHTML = player2 + " : ";
document.getElementById("output2").innerHTML = player2sc;


document.getElementById("player-ques").innerHTML = "Question turn is : " + player1;
document.getElementById("player-ans").innerHTML = "Answer turn is : "+  player2;

function send(){
	var numb1 = document.getElementById("player1").value;
	var numb2 = document.getElementById("player2").value;
	var actual_ans = parseInt(numb1) * parseInt(numb2);
	var design = "<div style = 'display: inline-block; border-radius: 20px; background-color: white; padding-right: 40px; padding-left: 40px;'> <label>" + numb1 + " X " + numb2 + "</label><input type = 'number' placeholder = 'enter number' style='top: 10px;' id='answer'><button type='button' style='display: inline-block; background-color: cyan; padding-right: 30px; padding-left: 30px; padding-top: 5px; padding-bottom: 5px; top: 10px; border-radius: 10px;' onclick = 'check()'>Check</button></button></div>";
	document.getElementById("output").innerHTML = design;
	document.getElementById("player1").value = null;
	document.getElementById("player2").value = null;
}

var question_turn = "player1";
var answer_turn = "player2";

function check(){
	var get_answer = document.getElementById("answer").value;
	if(get_answer == actual_ans){
		if(answer_turn == "player1"){
			player1sc += 1;
			document.getElementById("output1").innerHTML = player1sc;
		}else if(answer_turn == "player2"){
			player2sc += 1;
			document.getElementById("output2").innerHTML = player2sc;
		}
	}
	
	if(question_turn == "player1"){
		question_turn = "player2";
		document.getElementById("player-ques").innerHTML = "Question turn is : " + player2;
	}else if(question_turn == "player2"){
		question_turn = "player1";
		document.getElementById("player-ques").innerHTML = "Question turn is : " + player1;
	}
	
	if(answer_turn == "player1"){
		answer_turn = "player2";
		document.getElementById("player-ans").innerHTML = "Answer turn is : "+player2;
		
	}else if(answer_turn == "player2"){
		answer_turn = "player1";
		document.getElementById("player-ans").innerHTML = "Answer turn is : "+player1;
	}
	
	
	document.getElementById("output").innerHTML = null;
	
	
}