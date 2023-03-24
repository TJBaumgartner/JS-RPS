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
function playRound(playerSelection, computerSelection){
    let result = '';
    if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'Rock'){
        result = 'Draw! Rock ties Rock';
    }
    if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock'){
        result = 'You Win! Paper beats Rock';
    }
    if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Rock'){
        result = 'You Lose! Rock beats Scissors';
    }
    if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'Paper'){
        result = 'You Lose! Paper beats Rock';
    }
    if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'Paper'){
        result = 'Draw! Paper ties Paper';
    }
    if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Paper'){
        result = 'You win! Scissors beats Paper';
    }   
    if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissors'){
        result = 'You win! Rock beats Scissors';
    }
    if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors'){
        result = 'You Lose! Scissors beats Paper';
    }
    if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Scissors'){
        result = 'Draw! Scissors ties Scissors';
    }
    return result;
}
let computerSelection = getComputerChoice();
function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    let gamesTied = 0;
    for(var i=1; i<=5; i++){  
        let computerSelection = getComputerChoice();
        playerSelection = prompt('What do you choose?');
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
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
        let gameScore = ('Your score is '+ scorePlayer + ' wins, ' + gamesTied + ' ties, and ' + scoreComputer + ' losses');
        console.log(gameResult);
        console.log(gameScore);
    }
}