function getCompterChoice(){
    let computerChoice = '';
    let choice = Math.ceil (Math.random()*3); 
    if(choice = 1){
        computerChoice = 'Rock';
    }
    else if(choice = 2){
        computerChoice = 'Paper';
    }
    else {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}
function playRound(playerSelection, computerSelection){
}
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game(){

}