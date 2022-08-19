const resultBox = document.getElementById("choice/resultBox")
const userChoice = document.createElement("h1");
const computerChoice = document.createElement("h1");
const result = document.createElement("h1")
resultBox.append(userChoice, computerChoice, result)

//score system
let playerScre = document.getElementById("playerScore")
let computerScore = document.getElementById("computerScore")
let rizult = document.getElementById("rizult")

let playerScore = 1
let compScore = 1




//Computer random generated choice
let computerHands = ["rock", "paper", "scissors"]
let randomGeneratedHand = computerHands[Math.floor(Math.random() * computerHands.length)];
    



let playerSelection;
// Make user click buttons instead of prompt

const buttons = document.querySelectorAll(".options button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playerSelection = e.target.id
        userChoice.innerHTML = "Player choice: " + playerSelection;
        computerChoice.innerHTML = "Computer choice: " + randomGeneratedHand;
        playRound()
    });
});


//spēles loģika
function playRound() {
    if (playerSelection == "rock") {
        if (randomGeneratedHand == "scissors") {
            result.innerHTML =  "You picked Rock, Computer picked Scissors, You Win!"
            playerScre.innerHTML = "Player: " + playerScore++
        } else if (playerSelection == "rock") {
            if (randomGeneratedHand == "rock") {
                result.innerHTML = "You picked Rock, Computer picked Rock, it's a tie!"
            } else {
                result.innerHTML = "You picked Rock, Computer picked Paper, You lose..."
                computerScore.innerHTML = "Computer: " + compScore++ 
            }
        }
    }
    if (playerSelection == "paper") {
        if (randomGeneratedHand == "rock") {
            result.innerHTML = "You picked Paper, Computer picked Rock, You Win!"
            playerScre.innerHTML = "Player: " + playerScore++
        } else if (playerSelection == "paper") {
            if (randomGeneratedHand == "paper") {
                result.innerHTML = "You picked Paper, Computer picked Paper, it's a tie!"
            } else {
                result.innerHTML = "You picked Paper, Computer picked Scissors, You lose..."
                computerScore.innerHTML = "Computer: " + compScore++ 
            }
        }
    }
    if (playerSelection == "scissors") {
        if (randomGeneratedHand == "paper") {
            result.innerHTML = "You picked Scissors, Computer picked Paper, You Win!"
            playerScre.innerHTML = "Player: " + playerScore++
        } else if (playerSelection == "scissors") {
            if (randomGeneratedHand == "scissors") {
                result.innerHTML = "You picked Scissors, Computer picked Scissors, it's a tie!"
            } else {
                result.innerHTML = "You picked Scissors, Computer picked Rock, You lose..."
                computerScore.innerHTML = "Computer: " + compScore++ 
            }
        }
    }
    if (playerScore > compScore) {
        if (playerScore > 5){
            rizult.innerHTML = "You Win!"
        } 
    }
    if (compScore > playerScore) {
        if (compScore > 5) {
            rizult.innerHTML = "Computer Wins!"
        }
    }
    randomGeneratedHand = computerHands[Math.floor(Math.random() * computerHands.length)];
  }
    





































