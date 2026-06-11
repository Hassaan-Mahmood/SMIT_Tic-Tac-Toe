
// Variables to access the elements from html 
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var message = document.getElementById("message");

var text = "O";
var count = 0;


function textRendering (){
     if (count % 2 === 0) {
        text = "O";
    } else {
        text = "X";
    }
}

//Function to play the game
function playGame(index) {
    
    //Condition to writing turn of O and X in boxes
    if (index === "box1" && box1.innerHTML === "") {
        box1.innerHTML = text;
        count++;
    } else if (index === "box2" && box2.innerHTML === "") {
        box2.innerHTML = text;
        count++;
    } else if (index === "box3" && box3.innerHTML === "") {
        box3.innerHTML = text;
        count++;
    } else if (index === "box4" && box4.innerHTML === "") {
        box4.innerHTML = text;
        count++;
    } else if (index === "box5" && box5.innerHTML === "") {
        box5.innerHTML = text;
        count++;
    } else if (index === "box6" && box6.innerHTML === "") {
        box6.innerHTML = text;
        count++;
    } else if (index === "box7" && box7.innerHTML === "") {
        box7.innerHTML = text;
        count++;
    } else if (index === "box8" && box8.innerHTML === "") {
        box8.innerHTML = text;
        count++;
    } else if (index === "box9" && box9.innerHTML === "") {
        box9.innerHTML = text;
        count++;
    }

    //Call function of check wninnig patterns  
    checkWinner();
    textRendering();
}


// Function to check the wninnig patterns 
// (123, 456, 789, 147, 258, 369, 159, 357)
function checkWinner() {

    //O toggle Conditions
    // set 1
    if (box1.innerHTML === "O" && box2.innerHTML === "O" && box3.innerHTML === "O") {
        message.innerHTML = "winner is 'O'";
        reset();
        count = 0;
    } else if (box4.innerHTML === "O" && box5.innerHTML === "O" && box6.innerHTML === "O") {
        message.innerHTML = "winner is 'O'";
        reset();
    } else if (box7.innerHTML === "O" && box8.innerHTML === "O" && box9.innerHTML === "O") {
        message.innerHTML = "winner is 'O'";
        reset();
        count = 0;
    }
    // set 2
    else if (box1.innerHTML === "O" && box4.innerHTML === "O" && box7.innerHTML === "O") {
        message.innerHTML = "winner is 'O'";
        reset();
        count = 0;
    } else if (box2.innerHTML === "O" && box5.innerHTML === "O" && box8.innerHTML === "O") {
        message.innerHTML = "winner is 'O'";
        reset();
        count = 0;
    } else if (box3.innerHTML === "O" && box6.innerHTML === "O" && box9.innerHTML === "O") {
        message.innerHTML = "winner is 'O'";
        reset();
        count = 0;
    }
    // set 3
    else if (box1.innerHTML === "O" && box5.innerHTML === "O" && box9.innerHTML === "O") {
        message.innerHTML = "winner is 'O'";
        reset();
        count = 0;
    } else if (box3.innerHTML === "O" && box5.innerHTML === "O" && box7.innerHTML === "O") {
        message.innerHTML = "winner is 'O'";
        reset();
        count = 0;
    }
    
    //X toggle Conditions
    // set 1
    if (box1.innerHTML === "X" && box2.innerHTML === "X" && box3.innerHTML === "X") {
        message.innerHTML = "winner is 'X'";
        reset();
    } else if (box4.innerHTML === "X" && box5.innerHTML === "X" && box6.innerHTML === "X") {
        message.innerHTML = "winner is 'X'";
        reset();
    } else if (box7.innerHTML === "X" && box8.innerHTML === "X" && box9.innerHTML === "X") {
        message.innerHTML = "winner is 'X'";
        reset();
        count = 0;
    }
    // set 2
    else if (box1.innerHTML === "X" && box4.innerHTML === "X" && box7.innerHTML === "X") {
        message.innerHTML = "winner is 'X'";
        reset();
        count = 0;
    } else if (box2.innerHTML === "X" && box5.innerHTML === "X" && box8.innerHTML === "X") {
        message.innerHTML = "winner is 'X'";
        reset();
    } else if (box3.innerHTML === "X" && box6.innerHTML === "X" && box9.innerHTML === "X") {
        message.innerHTML = "winner is 'X'";
        reset();
        count = 0;
    }
    // set 3
    else if (box1.innerHTML === "X" && box5.innerHTML === "X" && box9.innerHTML === "X") {
        message.innerHTML = "winner is 'X'";
        reset();
    } else if (box3.innerHTML === "X" && box5.innerHTML === "X" && box7.innerHTML === "X") {
        message.innerHTML = "winner is 'X'";
        reset();
        count = 0;
    }



    noWinner();
}

//Function of reseting game
function reset() {
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";
}


//Function if no one from O/X can win the game then execute this code
function noWinner (){
    if (count === 9) {
        console.log("No Winner");
        message.innerHTML = "No winner";
        reset();
        count = 0;
    }
}



