let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
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
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

const buttons = Array.from(document.querySelectorAll('button'));
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
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    if(playerScore ===5 || computerScore ===5){
        console.log('game over');
    }
}));

//Function to play the round
function playRound(playerSelection, computerSelection){
    let result = '';


    if(playerSelection == computerSelection){
        result = 'Tie';
    }
    if((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')){
            playerScore++
    }
    if((computerSelection == 'Rock' && playerSelection == 'Scissors') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper')){
            computerScore++
    }
}
//NEXT TIME YOU COME BACK TERRENCE MAKE THE UI LOOK GOOD, GAME WORKS!


/**function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    let gamesTied = 0;
    let winner = false;
    while(winner == false){  
        let computerSelection = getComputerChoice();
        playerSelection = prompt('What do you choose?');
        playRound(playerSelection, computerSelection);
        let outcome = playRound(playerSelection, computerSelection);
        let gameResult = 0;
        if(outcome == 'Draw! Rock ties Rock'){
            gameResult = 3;
        } 
        if(outcome == 'Draw! Paper ties Paper'){
            gameResult = 3;
        }  
        if(outcome == 'Draw! Scissors ties Scissors'){
            gameResult = 3;
        }   
        if(outcome == 'You Lose! Scissors beats Paper'){
            gameResult = 2;
        }   
        if(outcome == 'You Lose! Rock beats Scissors'){
            gameResult = 2;
        }   
        if(outcome == 'You Lose! Paper beats Rock'){
            gameResult = 2;
        }   
        if(outcome == 'You win! Scissors beats Paper'){
            gameResult = 1;
        }   
        if(outcome == 'You win! Rock beats Scissors'){
            gameResult = 1;
        }     
        if(outcome == 'You Win! Paper beats Rock'){
            gameResult = 1;
        }    
        if(gameResult == 2){
            scoreComputer++
        }
        if(gameResult == 3){
            gamesTied++;
        }
        if(gameResult == 1){
            scorePlayer++;
        }
        if(scorePlayer == 5){
            console.log('You Win!')
            winner = true;
            break;
        }
        if(scoreComputer == 5){
            console.log('You Lose!')
            winner = true;
            break;
        }
        let gameScore = ('Your score is '+ scorePlayer + ' wins, ' + gamesTied + ' ties, and ' + scoreComputer + ' losses');
        console.log(playRound(playerSelection, computerSelection));
        console.log(gameScore);
    }
}**/