let boxes = document.querySelectorAll('.box');
let resetBtn = document.getElementById('reset-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.getElementById('msg');
let newGameBtn = document.getElementById('new-game-btn');

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

resetBtn.addEventListener('click', () => {
    boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    });
});


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;

        checkWin();
    })
})

let checkWin = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinnerMsg(pos1Val);
            }
        }    
    }    
}

let showWinnerMsg = (winner) => {
    msg.innerText = `Congratulations \n ${winner} wins!`;
    msgContainer.classList.remove('hide');
}

newGameBtn.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msgContainer.classList.add('hide');
});