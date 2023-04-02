//declare variables
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let pScore = document.getElementById("pScore");
let cScore = document.getElementById("cScore");
let dialogueContent = document.getElementById("dialogueContent");
let winner = '';
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const buttons = Array.from(document.querySelectorAll('button'));

//Randomize computer Choice
function getComputerChoice(){
    let computerChoice = '';
    let choice = Math.ceil(Math.random()*3); 
    if(choice == 1){
        computerChoice = 'Rock';
    }
    if(choice == 2){
        computerChoice = 'Paper';
    }
    if(choice == 3){
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

//Get player Selection
button1.addEventListener('click', () =>{
    playerSelection = 'Rock';
});
button2.addEventListener('click', () =>{
    playerSelection = 'Paper';
});
button3.addEventListener('click', () =>{
    playerSelection = 'Scissors';
});

//When a button is clicked run the playRound function until someone gets 5 points
buttons.forEach(button => button.addEventListener('click', () =>{
    if(playerScore < 5 && computerScore < 5){
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    }
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;

    if(playerScore ===5){
        dialogueContent.textContent = 'Game Over! You beat the machine!';
    }
    if(computerScore ===5){
        dialogueContent.textContent = 'Game Over! The machine beat you!';
    }
}));

//Function to play the round
function playRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection){
        winner = 'tie'
    }
    if((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')){
            playerScore++
            winner = 'player'

    }
    if((computerSelection == 'Rock' && playerSelection == 'Scissors') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper')){
            computerScore++
            winner = 'computer'
    }
    updateResult(winner);
}
//Creates Dialogue based on who won
function updateResult(winner){
    if(winner === 'tie'){
        dialogueContent.textContent = 'Tie game.';
    }
    if(winner === 'player'){
        if(playerScore === 1){
            dialogueContent.textContent ='Nice choice! You won one!';
        }
        if(playerScore === 2){
            dialogueContent.textContent ='One step closer to defeating it!';
        }
        if(playerScore === 3){
            dialogueContent.textContent ='Almost there! Keep it up!';
        }
        if(playerScore === 4){
            dialogueContent.textContent ='One more! Finish it!';
        }
    }
    if(winner === 'computer'){
        if(computerScore === 1){
            dialogueContent.textContent ='It got lucky, try again';
        }
        if(computerScore === 2){
            dialogueContent.textContent ='No big deal, try again';
        }
        if(computerScore === 3){
            dialogueContent.textContent = "You're not out yet! Fight back!";
        }
        if(computerScore === 4){
            dialogueContent.textContent = "Please don't let it win!";
        }
    
    }
}
