// declaring variables to hold all necessary values
var targetScore;
var wins = 0;
var losses = 0;
var playerScore = 0;
var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12];
var crysOneVal = 0;
var crysTwoVal = 0;
var crysThreeVal = 0;
var crysFourVal = 0;


// on page load, run 'reset' function
$(document).ready(function() {
    reset();
});

// reset function sets score to 0, selects new target score, resets array, and  runs 'crystal' functions to assigns values to crystals.
function reset() {
    playerScore = 0;
    targetScore = Math.floor(Math.random() * 101) + 19;
    console.log("Target Score: " + targetScore);
    $("#target-score").text(targetScore);
    $("#player-score").text(playerScore);
    numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    crystalOne();
    crystalTwo();
    crystalThree();
    crystalFour();
};

// These four 'crystal' functions assign four different numbers from a range (array) of 1-12.
// Each assigned number is removed from the array so it cannot be assigned more than once.
function crystalOne() {
    // Slice a random number from the array. Assign it to crysOneVal.
    var i = (Math.round(Math.random() * 11));
    console.log(i);
    crysOneVal = numberOptions.slice(i,i+1);
    console.log("CrysOne = " + crysOneVal);
    // Splice that same number from the array.
    numberOptions.splice(i,1);
    console.log("numberOptions: " + numberOptions);
    // assign a value to the crystal's html element
    $("#crys-one").attr("data-crystalvalue", crysOneVal);
};

function crystalTwo() {
    // Slice a random number from the array, excluding the previously selected number. Assign it to crysTwoVal.
    var i = (Math.round(Math.random() * 10));
    console.log(i);
    crysTwoVal = numberOptions.slice(i, i + 1);
    console.log("CrysTwo = " + crysTwoVal);
    // Splice that same number from the array.
    numberOptions.splice(i, 1);
    console.log("numberOptions: " + numberOptions);
    // assign a value to the crystal's html element
    $("#crys-two").attr("data-crystalvalue", crysTwoVal);
};

function crystalThree() {
    // Slice a random number from the array, excluding the previously selected number. Assign it to crysThreeVal.
    var i = (Math.round(Math.random() * 9));
    console.log(i);
    crysThreeVal = numberOptions.slice(i, i + 1);
    console.log("CrysThree = " + crysThreeVal);
    // Splice that same number from the array.
    numberOptions.splice(i, 1);
    console.log("numberOptions: " + numberOptions);
    // assign a value to the crystal's html element
    $("#crys-three").attr("data-crystalvalue", crysThreeVal);
};

function crystalFour() {
    // Slice a random number from the array, excluding the previously selected number. Assign it to crysFourVal.
    var i = (Math.round(Math.random() * 8));
    console.log(i);
    crysFourVal = numberOptions.slice(i, i + 1);
    console.log("CrysFour = " + crysFourVal);
    // Splice that same number from the array.
    numberOptions.splice(i, 1);
    console.log("numberOptions: " + numberOptions);
    // assign a value to the crystal's html element
    $("#crys-four").attr("data-crystalvalue", crysFourVal);
};

// when a crystal is clicked, add that crystals value to the player's score
$(".crystal-button").click(function() {
    console.log($(this).attr("data-crystalvalue"));
    var i = ($(this).attr("data-crystalvalue"));
    i = parseInt(i);
    playerScore += i;
    console.log("Player Score: " + playerScore);
    $("#player-score").text(playerScore);   
    // when player matches target score, declare him/her a winner, add 1 to Wins, reset the game. 
    if (playerScore === targetScore) {
        $("#player-score").text(playerScore);
        setTimeout(function() {
            alert("You Win! Play Again.");
            wins++;
            $("#wins").text(wins);
            reset();
        }, 100);
   // if player score exceeds target score, declare him/her a loser, add 1 to Losses, reset the game.
    } else if (playerScore > targetScore) {
        $("#player-score").text(playerScore);
        setTimeout(function() {
        alert("You Lose! Play Again.")
        losses++;
        $("#losses").text(losses);
        reset();
        }, 100);
    };
});
