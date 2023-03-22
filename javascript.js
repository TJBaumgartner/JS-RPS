function getComputerChoice(){
    let computerChoice = '';
    let choice = Math.ceil(Math.random()*3); 
    if(choice == 1){
        computerChoice = 'Rock';
    }
    else if(choice == 2){
        computerChoice = 'Paper';
    }
    else {
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
const computerSelection = getComputerChoice();
function score(){
    let outcome = playRound(playerSelection, computerSelection);
    let playerWin = 0;
    let computerWin = 0;
    let neitherWin = 0;
    let gameResult = 0;
    if(outcome == 'Draw! Rock ties Rock'){
        neitherWin++;
    } 
    if(outcome == 'Draw! Paper ties Paper'){
        neitherWin++;
    }  
    if(outcome == 'Draw! Scissors ties Scissors'){
        neitherWin++;
    }   
    if(outcome = 'You Lose! Scissors beats Paper'){
        computerWin++;
    }   
    if(outcome == 'You Lose! Rock beats Scissors'){
        computerWin++;
    }   
    if(outcome == 'You Lose! Paper beats Rock'){
        computerWin++;
    }   
    if(outcome == 'You win! Scissors beats Paper'){
        playerWin++;
    }   
    if(outcome == 'You win! Rock beats Scissors'){
        playerWin++;
    }     
    if(outcome == 'You Win! Paper beats Rock'){
        playerWin++;
    }    


    if(playerWin == 1){
        gameResult = 1;
    }
    if(computerWin == 1){
        gameResult = 2;
    }
    if(neitherWin == 1){
        gameResult = 3;
    }
    //let gameScore = ('Your score is '+ scorePlayer + ' wins, ' + gamesTied + ' ties, and ' + scoreComputer + ' losses');
    return gameResult;
}
function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    let gamesTied = 0;
    for(var i=1; i<=5; i++){
        playerSelection = prompt('What do you choose?');
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log(score());
        if(score() == 1){
            scorePlayer++;
        }
        if(score() == 2){
            scoreComputer++
        }
        if(score() == 3){
            gamesTied++;
        }
        let gameScore = ('Your score is '+ scorePlayer + ' wins, ' + gamesTied + ' ties, and ' + scoreComputer + ' losses');
        console.log(gameScore);
    }
}