var victory;                                                          //declare global variables
var computerChooses;                                                  
var youChoose;

function rockPaperScissors() {                                                     //this function contains the game
    
var userChoice = prompt("Do you choose ROCK, PAPER or SCISSORS?").toLowerCase();   //prompt user for input
    
var computerChoice = Math.random();                                                //chooses a random number between 0 and 1
if (computerChoice < 0.34) {                                                       //defines possible computer choices
	computerChoice = "rock";                                               
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
	
} 
victory = "";                                                              //displays results 
computerChooses = "COMPUTER: " + computerChoice.toUpperCase();             //tells user what the computer chose
youChoose = "YOU: " + userChoice.toUpperCase();                            //reminds user of their own choice


var compare = function(choice1, choice2) {                                 //compare choice1/userChoice to choice2/computerChoice
    
    if(choice1 === choice2) {                                              //if user and comp make the same choice
        victory +=  "It's a tie! Please choose again!";                    //it's a tie
    } 
    else if(choice1 === "rock") {                                          //if you choose rock:
        if(choice2 === "scissors") {                                       //if comp chooses scissors,
            victory += "The computer chose scissors. You win!";            //you win!
        } 
        else {                                                             //but if comp chooses paper,
            victory += "The computer chose paper. You lose...";            //you lose.
        }
    }
    
    else if (choice1 === "paper") {                                        //if you choose paper:
        if (choice2 === "rock") {                                          //if comp chooses rock,
            victory += "The computer chose rock. You win!";                //you win!
        }
        else {                                                             //but if comp chooses scissors
            victory += "The computer chose scissors. You lose...";         //you lose.
        }
    }
    
    else if (choice1 === "scissors") {                                     //if you choose scissors:
        if (choice2 === "paper") {                                         //if comp chooses paper,
            victory += "The computer chose paper. You win!";               //you win!     
        }
        else {                                                             //but if comp chooses rock,
            victory += "The computer chose rock. You lose...";            //you lose.
        }
    }  
    
    else {
        //if you don't input ROCK, PAPER, OR SCISSORS, call the function to prompt the user again
        rockPaperScissors();
    }
};     //end compare functioin

compare(userChoice, computerChoice);  //call the nested function  
} //end rockPaperScissors function

rockPaperScissors();   //call function to start the game
writeResults(); //writes results to page

function writeResults(){
 //write the results to the page using DOM manipulation
var placement = document.getElementById("results");            //location of parent element, the inner <div>

var myChoice = document.createElement("p");                    //create a <p> node
myChoice.setAttribute("class", "you");                         //give it the class "you"
var myChoiceContent = document.createTextNode(youChoose);      //give it a text node with content of youChoose
myChoice.appendChild(myChoiceContent);                         //attach text node to <p>
placement.appendChild(myChoice);                               //attach <p> to parent <div>

var results = document.createElement("p");                     //create another <p>
results.setAttribute("class", "comp");                         //give it the class "comp"
var resultsContent = document.createTextNode(computerChooses); //give it a text node
results.appendChild(resultsContent);                           //attach text node to <p>
placement.appendChild(results);                                //attach <p> to parent <div>

var victoryText = document.createElement("p");                 //create yet another <p>
victoryText.setAttribute("class", "victory");                  //give it the class "victory"
var victoryTextContent = document.createTextNode(victory);     //give it a text node
victoryText.appendChild(victoryTextContent);                   //attach text node to <p>
placement.appendChild(victoryText);                            //attach <p> to parent <div>   
} //end writeResults function

function runAgain() {                                          //changes text that user sees
    rockPaperScissors();                                       //play through the game again
    //change text to display values from most recent game
    var one = document.getElementsByClassName("you")[0].textContent = youChoose;
    var two = document.getElementsByClassName("comp")[0].textContent = computerChooses;
    var three = document.getElementsByClassName("victory")[0].textContent = victory;  
}                                                              //end runAgain function



var playAgain = document.getElementById("play_again");         //location of Play Again button
playAgain.addEventListener("click", runAgain, false);          //call runAgain when user clicks button