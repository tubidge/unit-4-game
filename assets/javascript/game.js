var targetScore;
var wins = 0;
var losses = 0;
var playerScore = 0;
var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12];
var crysOneVal = 0;
var crysTwoVal = 0;
var crysThreeVal = 0;
var crysFourVal = 0;



$(document).ready(function() {
    reset();
    crystalOne();
    crystalTwo();
    crystalThree();
    crystalFour();
});

function reset() {
    playerScore = 0;
    targetScore = Math.floor(Math.random() * 101) + 19;
    console.log(targetScore);
    $("#target-score").text(targetScore);
    $("#player-score").text(playerScore);
    // crysOneVal = numberOptions[(Math.floor(Math.random() * 12))];
    // console.log(crysOneVal);
    // crysTwoVal = numberOptions[(Math.floor(Math.random() * 12))];
    // console.log(crysTwoVal);
    // crysThreeVal = numberOptions[(Math.floor(Math.random() * 12))];
    // console.log(crysThreeVal);
    // crysFourVal = numberOptions[(Math.floor(Math.random() * 12))];
    // console.log(crysFourVal);
    // for (var i = 0; i < 4; i++) {
    //     var rando = Math.floor(Math.random() * 11) + 1;
    //     if (rando === numberOptions[0] || rando === numberOptions[1] || rando === numberOptions[2]) {
    //         rando = Math.floor(Math.random() * 11) + 1;
    //     } else {
    //         numberOptions.push(rando);
    //     };
    // };
    // console.log("Number Options: " + numberOptions);
};

// This function grabs a random number out of the array and assigns it to crysOne.
function crystalOne() {
    // Slice a random number from the array. Assign it to crysOneVal.
    var i = (Math.round(Math.random() * 11));
    console.log(i);
    crysOneVal = numberOptions.slice(i,i+1);
    console.log("CrysOne = " + crysOneVal);
    // Splice that same number from the array.
    numberOptions.splice(i,1);
    console.log("numberOptions: " + numberOptions);
    $("#crys-one").attr("data-crystalvalue", crysOneVal);
};

function crystalTwo() {
    // Slice a random number from the array. Assign it to crysOneVal.
    var i = (Math.round(Math.random() * 10));
    console.log(i);
    crysTwoVal = numberOptions.slice(i, i + 1);
    console.log("CrysTwo = " + crysTwoVal);
    // Splice that same number from the array.
    numberOptions.splice(i, 1);
    console.log("numberOptions: " + numberOptions);
    $("#crys-two").attr("data-crystalvalue", crysTwoVal);
};

function crystalThree() {
    // Slice a random number from the array. Assign it to crysOneVal.
    var i = (Math.round(Math.random() * 9));
    console.log(i);
    crysThreeVal = numberOptions.slice(i, i + 1);
    console.log("CrysThree = " + crysThreeVal);
    // Splice that same number from the array.
    numberOptions.splice(i, 1);
    console.log("numberOptions: " + numberOptions);
    $("#crys-three").attr("data-crystalvalue", crysThreeVal);
};

function crystalFour() {
    // Slice a random number from the array. Assign it to crysOneVal.
    var i = (Math.round(Math.random() * 8));
    console.log(i);
    crysFourVal = numberOptions.slice(i, i + 1);
    console.log("CrysFour = " + crysFourVal);
    // Splice that same number from the array.
    numberOptions.splice(i, 1);
    console.log("numberOptions: " + numberOptions);
    $("#crys-four").attr("data-crystalvalue", crysFourVal);
};

$(".crystal-button").click(function() {
    console.log($(this).attr("data-crystalvalue"));
    var i = ($(this).attr("data-crystalvalue"));
    i = parseInt(i);
    console.log(typeof(i));
    playerScore += i;
    console.log("Player Score: " + playerScore);
    $("#player-score").text(playerScore);    
    if (playerScore === targetScore) {
        $("#player-score").text(playerScore);
        setTimeout(function() {
            alert("You Win! Play Again.");
            wins++;
            $("#wins").text(wins);
            reset();
        }, 100);
        
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
