
//******* VARIABLES *******//

var crystals ["assets/images/crystal1.jpg", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/crystal4", "assets/images/crystal5.jpg"]

//Random number that will be generated to match
var randomWinNumber = "";

//variable to hold win count
var winCount = 0;

//varible to hold loss count
var lossCount = 0;

//variable to hold user score
var playerScore = 0;



//************



//Computer assigns random number between 19 - 120
var randomWinNumber = Math.floor((Math.random() * 120)  + 19);
//console.log(randomWinNumber);
document.getElementById("randomNumberBox").innerHTML = randomWinNumber;

//$('#randomNumberBox').html(randomWinNumber);

//**********Assign each crystal a random number between 1 - 12

//****First will start with generating an array of 4 random numbers
var numbers =[Math.floor((Math.random() *12) + 1), Math.floor((Math.random() *12) + 1), Math.floor((Math.random() *12) + 1), Math.floor((Math.random() *12) + 1)];


}*/

for (i = 0; i < 4; i++) {
    var randomNumber = Math.floor(Math.random()*12);

}






//Start Game


$("#crystal1").on("click", function() {
crystalClicked();
playerScore = crystal1 + playerScore;
console.log("Player Score is: " + playerScore);

})

function crystalClicked() {

    alert("Crystal was clicked.");

}













    /* function game() {

               $("#crystal1").on("click", function() {
                    userScore = userScore + randomCrystal1;
                    console.log("crystal 1 number is: " + randomCrystal1);
                    console.log("User total: " + userScore);
                    $("#playerTotalScore").text(userScore);
                    score();

                })


}*/


   


