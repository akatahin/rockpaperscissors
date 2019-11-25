// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var winScore = 0;
var lossScore = 0;
var drawScore = 0;

$("#shoot").click(function() {
    let playerInp = $("#input").val();
    let player = playerInp.toLowerCase();
    let compute = Math.random();
    console.log(compute)
    let computer = "";
    
    

    if (compute < .33){
        computer = "rock";
        console.log(computer);
    } else if (compute < .67) {
        computer = "paper";
        console.log(computer);
    } else {
        computer = "scissor";
        console.log(computer);
    }
    
    if ((player == "rock" && computer == "scissor") ||
     (player == "scissor" && computer == "paper") || 
     (player == "paper" && computer == "rock")) {
        $("#computerChoice").text(computer)
        $("#userChoice").text(player)
        $("#result").text("Player won! and Computer lost!")
        console.log("Player won")
        winScore = winScore + 1
        $("#win").text(winScore)
        
    
    } else if ((player == "scissor" && computer == "rock") ||
     (player == "paper" && computer == "scissor") || 
     (player == "rock" && computer == "paper")) {
         $("#computerChoice").text(computer)
         $("#userChoice").text(player)
        console.log("Player lose") 
        $("#result").text("Player lost! and Computer won!")
        lossScore = lossScore + 1
        $("#loss").text(lossScore)
        
    
    } else if (player == computer){
        console.log("Draw!")
        $("#computerChoice").text(computer)
        $("#userChoice").text(player)
        $("#result").text("Draw!")
        drawScore = drawScore + 1
        $("#draw").text(drawScore)
    
    } else {
        $("#result").text("Invalid input")
    }



});

$

// DOCUMENT READY FUNCTION BELOW






//python3 -m http.server 3000