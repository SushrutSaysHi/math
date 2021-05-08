function travel(){
	var player1 = document.getElementById("player1").value;
	var player2 = document.getElementById("player2").value;
	
	localStorage.setItem("player1", player1);
	localStorage.setItem("player2", player2);
	
	if(document.getElementById("player1").value != null && document.getElementById("player2").value != null){
		window.location = "game-page.html";
	}
}