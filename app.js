/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let global = 0;
let total = 0;
const playerOne = document.querySelector(".player-0-panel");
const playerTwo = document.querySelector(".player-1-panel");
const div = document.querySelector(".wrapper");
const img = document.querySelector(".dice"); 
const active = document.querySelector(".active");
const currentPlayer = document.querySelectorAll(".player-current-score");
const playerScore = document.querySelectorAll(".player-score");
let globalScore = document.querySelector('.active .player-score');
const rollButton = document.querySelector(".btn-roll");
const holdButton = document.querySelector(".btn-hold");
const buttonNew = document.querySelector(".btn-new");
const playerName = document.querySelectorAll(".player-name");
let player1Score = document.getElementById("score-0");
let player2Score = document.getElementById("score-1");
let currentScore = document.querySelector(".active .player-current-box .player-current-score");

function loadGame(){
const player1Name = prompt("Enter Player One Name: ");
const player2Name = prompt("Enter Player Two Name: ");
playerName[0].innerHTML = player1Name;
playerName[1].innerHTML = player2Name;

console.log(div.childNodes);
for(let i=0;i<2;i++){
    playerScore[i].innerHTML= 0;
    currentPlayer[i].innerHTML = 0;
}
};

loadGame();

function scoreTracker(){
currentScore = document.querySelector(".active .player-current-box .player-current-score");
currentScore.innerHTML = 0;
const randomNum = Math.floor(Math.random() * 6) + 1;
img.src= `dice-${randomNum}.png`;
total += randomNum;
console.log(total);
currentScore.innerHTML = total;
if(randomNum === 1){
    currentScore.innerHTML = 0;
    globalScore = document.querySelector(".active .player-score");
    total = 0;
    globalScore.innerHTML = 0;
    updateGlobal();
}
}

rollButton.addEventListener("click", function(){
    scoreTracker();
});

function updateGlobal(){
    
    globalScore = document.querySelector(".active .player-score");
    const round = parseInt(globalScore.innerHTML) + parseInt(currentScore.innerHTML);
    globalScore.innerHTML = round;
    if(round >= 20){
        alert(active.firstElementChild.innerHTML + " WINS!!!");
        newGame();
    }
    total = 0;
    currentScore.innerHTML = 0;
    for(let i=0;i<2;i++){
        playerName[i].parentElement.classList.toggle("active");
    }
}

holdButton.addEventListener("click", function(){
    updateGlobal();
});

function newGame(){
    playerOne.classList.add("active");
    playerTwo.classList.remove("active");
    loadGame();
}

buttonNew.addEventListener("click", function(){
    newGame();
});

