const currentPlayer = document.querySelector('.current-player');
const boxs = document.querySelectorAll('.box');
const newGame = document.querySelector('.new-game');

newGame.addEventListener('click', () => {
    window.location.reload();
});

let current = "X";
let arrayWin = [1,1,1,1,1,1,1,1,1]
let won = false

boxs.forEach((box,index) => {
    box.addEventListener('click', () => {
        if(box.textContent === '-' && !won){
            box.textContent = current;
            box.classList.add('box-without');
            checkWin(current, index);
            if(!won){
                current = current === 'X' ? "O" : "X";
                currentPlayer.textContent = `Obecny gracz: ${current}`
        }
    }
    });
});

function checkWin(symbol, index) {
    arrayWin[index] = symbol;
    
    // Sprawdzanie wierszy
    for(let i = 0; i < 9; i += 3) {
        if(arrayWin[i] === symbol && 
           arrayWin[i+1] === symbol && 
           arrayWin[i+2] === symbol) {
            won = true;
        }
    }
    
    // Sprawdzanie kolumn
    for(let i = 0; i < 3; i++) {
        if(arrayWin[i] === symbol && 
           arrayWin[i+3] === symbol && 
           arrayWin[i+6] === symbol) {
            won = true;
        }
    }
    
    // Sprawdzanie przekątnych
    if(arrayWin[0] === symbol && 
       arrayWin[4] === symbol && 
       arrayWin[8] === symbol) {
        won = true;
    }
    
    if(arrayWin[2] === symbol && 
       arrayWin[4] === symbol && 
       arrayWin[6] === symbol) {
        won = true;
    }
    
    if(won) {
        currentPlayer.textContent = `Wygrał gracz: ${symbol}!`;
    }
}