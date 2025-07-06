document.addEventListener('DOMContentLoaded', () => {
    const start = document.querySelector('.start-game');
    const humanCheckbox = document.getElementById('Human');
    const computerCheckbox = document.getElementById('Computer');
    const dialog = document.querySelector('dialog');
    dialog.showModal();

    dialog.addEventListener('cancel', (event) => {
        event.preventDefault();
    });

    start.addEventListener('click', () => {
        const playerType = humanCheckbox.checked ? 'Human' : 'Computer';
        dialog.close();
        console.log(`Selected player type: ${playerType}`);
        if (playerType === 'Human') {
            document.querySelector('.vsHuman').textContent = 'YOU vs HUMAN';
            document.querySelector('.vsComputer').textContent = '';
        } else if (playerType === 'Computer') {
            document.querySelector('.vsComputer').textContent = 'YOU vs COMPUTER';
            document.querySelector('.vsHuman').textContent = '';
        }
        Gameboard();
    });

    function Gameboard() {
        let board = ['', '', '', '', '', '', '', '', ''];
        let winningCombinations = [
            [0, 1, 2], [3, 4, 5],
            [6, 7, 8], [0, 3, 6],
            [1, 4, 7], [2, 5, 8],   
            [0, 4, 8], [2, 4, 6]
        ];
        
        function HandleClicks() {
            let p1 = 'X';
            let p2 = 'O';
            let currentPlayer = p1;
            let gameOver = checkWinner();
            const cells = document.querySelectorAll('.game-container div');
            cells.forEach(cell => {
                cell.addEventListener('click', (e) => {
                    const index = e.target.dataset.index;
                    console.log(`Cell clicked: ${index}`);
                    if (board[index] === '' && !gameOver) {
                        board[index] = currentPlayer;
                        e.target.textContent = currentPlayer;
                        if (checkWinner()) {
                            gameOver = true;
                        } else {
                            currentPlayer = currentPlayer === p1 ? p2 : p1;
                            console.log(`Current player: ${currentPlayer}`);
                        }
                    }
                });
            });

        }
        HandleClicks();

        function checkWinner() {
            let winner=' ';
            for (let i of winningCombinations) {
                if (board[i[0]] === '' || board[i[1]] === '' || board[i[2]] === '') {
                    continue; 
                } else if (board[i[0]] === board[i[1]] && board[i[1]] === board[i[2]]) {
                    console.log(`Winner: ${board[i[0]]}`);
                    winner = (board[i[0]] == 'X') ? 'YOU win' : 'OPPONENT wins';
                    const gameOverMessage = document.getElementById('game-over-message');
                    gameOverMessage.textContent = ` ${winner} `;
                    const gameOverDialog = document.getElementById('game-over-dialog');
                    gameOverDialog.showModal();
                    gameOverDialog.addEventListener('cancel', (event) => {
                        event.preventDefault();
                    });
                    return true;
                }
            }
            return false;
        }

    }
});
