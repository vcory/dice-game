let player1 = prompt("What is your name, player 1?");
let player2 = prompt("What is your name, player 2?");
let rollButton = document.getElementById("rollButton");



function rollDice() {
   return Math.floor(Math.random() * 6 + 1);  
}
