// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function() {
    let player = $("#input").val();
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
        console.log("Player won")
    
    } else if ((player == "scissor" && computer == "rock") ||
     (player == "paper" && computer == "scissor") || 
     (player == "rock" && computer == "paper")) {
         $("#computerChoice").text(computer)
         $("#userChoice").text(player)
        console.log("Player lose") 
    
    } else {
        console.log("Draw!")
        $("#computerChoice").text(computer)
        $("#userChoice").text(player)
    }



});

$

// DOCUMENT READY FUNCTION BELOW






//python3 -m http.server 3000