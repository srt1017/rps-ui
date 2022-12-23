let compChoice = Math.random();

function getComputerChoice() {
    return ['rock','paper','scissors'][~~(Math.random()*3)];
}
getComputerChoice();
let gameResult = "tie";
let winner;
let playerscore = 0;
let computerscore = 0;

function displaytie() {
    document.getElementById("result").innerHTML = "The result is a tie."
}

function displaywin() {
    document.getElementById("result").innerHTML = "Congrats! You win this round."
    winner = "user"
    playerscore++;
}

function displayloss() {
    document.getElementById("result").innerHTML = "Sorry... you lose this round."
    winner = "computer"
    computerscore++;
}

function displayscore() {
    document.getElementById("scores").innerHTML = "The score right now is" + playerscore + "-" + computerscore;
}

document.getElementById("rock").addEventListener("click", rockRound);
function rockRound(e)
{
    let compChoice = getComputerChoice();
    if (compChoice === "rock") {
        displaytie();
        }
    else if (compChoice === "scissors"){
        gameResult = "User wins! Rock beats scissors.";
        displaywin();
        }
    else if (compChoice === "paper") {
        gameResult = "User lost. Paper beats rock.";
        displayloss();
        }
}

document.getElementById("paper").addEventListener("click", paperRound);
function paperRound(e) 
{
    let compChoice = getComputerChoice();
    if (compChoice === "paper") {
        displaytie();
    }
    if (compChoice === "scissors") {
        gameResult = "User lost. Scissors beats paper."
        displayloss();
    }
    if (compChoice === "rock") {
        gameResult = "User wins! Paper beats rock."
        displaywin();
    }
}

document.getElementById("scissors").addEventListener("click", scissorsRound);
function scissorsRound(e)
{
    let compChoice = getComputerChoice();
    if (compChoice === "scissors") {
        displaytie();
    }
    if (compChoice === "rock") {
        gameResult = "User lost. Rock beats scissors."
        displayloss();
    }
    if (compChoice === "paper") {
        gameResult = "User wins! Paper beats rock."
        displaywin();
    }

}