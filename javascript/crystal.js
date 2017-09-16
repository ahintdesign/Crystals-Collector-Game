
var winCount;
var lossCount;
var playerScore;


function initGame() {
//variable to hold win count
winCount = 0;

//varible to hold loss count
lossCount = 0;

//variable for player score
playerScore = 0;
$("#playerScore").html("0");


}





function startGame() {
console.log("startGame was called");    
initGame();
goal();
populateCrystals();
console.log(document.getElementById("playerScore").innerHTML);

}//startGame function

var randomWinNumber;

function goal() {
//************
//Random number that will be generated to match
//Computer assigns random number between 19 - 120
randomWinNumber = Math.floor((Math.random() * (120 - 19 + 1) + 19));
document.getElementById("randomNumberBox").innerHTML = randomWinNumber;
}

var crystal1;
var crystal2;
var crystal3;
var crystal4;

function populateCrystals () {
//**********Assign each crystal a random number between 1 - 12

crystal1 = Math.floor(Math.random() * 12) + 1;
crystal2 = Math.floor(Math.random() * 12) + 1;
crystal3 = Math.floor(Math.random() * 12) + 1;
crystal4 = Math.floor(Math.random() * 12) + 1;
}


//Crystal click function




    $("#crystal1").on("click", function() {
        playerScore += crystal1;
        $("#playerScore").html(playerScore);
        console.log("You clicked Crystal 1 which = " + crystal1);
        outcome();

    });

    $("#crystal2").on("click", function() {
        playerScore += crystal2;
        $("#playerScore").html(playerScore);
        console.log("You clicked Crystal 2 which = " + crystal2);
        outcome();
    });

    $("#crystal3").on("click", function() {
        playerScore += crystal3;
        $("#playerScore").html(playerScore);
        console.log("You clicked Crystal 3 which = " + crystal3);
        outcome();
    });

    $("#crystal4").on("click", function() {
        playerScore += crystal4;
        $("#playerScore").html(playerScore);
        console.log("You clicked Crystal 4 which = " + crystal4);
        outcome();

    });





//Function to check the player score

function outcome() {
    if (playerScore == randomWinNumber) {
        alert("AWESOME! You win!!");
        winCount++;
        $("#winCount").html(winCount);
        startGame();
       
    } else if (playerScore > randomWinNumber) {
        alert("Oh no, you went over! You lose :-(");
        lossCount++;
        $("#lossCount").html(lossCount);
        startGame();

    }
  }


startGame ();











 

   


