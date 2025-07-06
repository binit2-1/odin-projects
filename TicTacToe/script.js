document.addEventListener('DOMContentLoaded', () => {
    const start = document.querySelector('.start-game');
    const humanCheckbox = document.getElementById('Human');
    const computerCheckbox = document.getElementById('Computer');
    const dialog = document.querySelector('dialog');
    dialog.showModal();

    dialog.addEventListener('cancel', (event) => {
        event.preventDefault();
    });

    // Player factory function
    function Player(name, symbol) {
        return { name, symbol };
    }

    // Gameboard factory function
    function Gameboard() {
        let board = ['', '', '', '', '', '', '', '', ''];
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5],
            [6, 7, 8], [0, 3, 6],
            [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        function getBoard() {
            return [...board];
        }
        function setMark(index, symbol) {
            if (board[index] === '') {
                board[index] = symbol;
                return true;
            }
            return false;
        }
        function resetBoard() {
            board = ['', '', '', '', '', '', '', '', ''];
        }
        function checkWinner() {
            for (let combo of winningCombinations) {
                const [a, b, c] = combo;
                if (
                    board[a] !== '' &&
                    board[a] === board[b] &&
                    board[a] === board[c]
                ) {
                    return board[a];
                }
            }
            return null;
        }
        return { getBoard, setMark, resetBoard, checkWinner };
    }

    // Game controller factory function
    function GameController() {
        const player1 = Player('YOU', 'X');
        const player2 = Player('HUMAN', 'O');
        const computer = Player('COMPUTER', 'O');
        let currentPlayer = player1;
        let gameOver = false;
        const gameboard = Gameboard();

        // Minimax algorithm for unbeatable AI
        function minimax(boardArr, depth, isMaximizing) {
            const winner = getWinner(boardArr);
            if (winner === 'O') return { score: 10 - depth };
            if (winner === 'X') return { score: depth - 10 };
            if (boardArr.every(cell => cell !== '')) return { score: 0 };

            if (isMaximizing) {
                let bestScore = -Infinity;
                let move = -1;
                for (let i = 0; i < 9; i++) {
                    if (boardArr[i] === '') {
                        boardArr[i] = 'O';
                        let result = minimax(boardArr, depth + 1, false);
                        boardArr[i] = '';
                        if (result.score > bestScore) {
                            bestScore = result.score;
                            move = i;
                        }
                    }
                }
                return { score: bestScore, move };
            } else {
                let bestScore = Infinity;
                let move = -1;
                for (let i = 0; i < 9; i++) {
                    if (boardArr[i] === '') {
                        boardArr[i] = 'X';
                        let result = minimax(boardArr, depth + 1, true);
                        boardArr[i] = '';
                        if (result.score < bestScore) {
                            bestScore = result.score;
                            move = i;
                        }
                    }
                }
                return { score: bestScore, move };
            }
        }

        // Helper to check winner for minimax
        function getWinner(boardArr) {
            const combos = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];
            for (let combo of combos) {
                const [a, b, c] = combo;
                if (
                    boardArr[a] !== '' &&
                    boardArr[a] === boardArr[b] &&
                    boardArr[a] === boardArr[c]
                ) {
                    return boardArr[a];
                }
            }
            return null;
        }

        function computerMove() {
            const boardArr = gameboard.getBoard();
            const { move } = minimax(boardArr, 0, true);
            if (move !== undefined && move !== -1) {
                gameboard.setMark(move, computer.symbol);
                const cells = document.querySelectorAll('.game-container div');
                cells[move].textContent = computer.symbol;
                const winner = gameboard.checkWinner();
                if (winner) {
                    gameOver = true;
                    showGameOverDialog(winner === 'X' ? 'YOU win' : 'COMPUTER wins');
                } else if (gameboard.getBoard().every(cell => cell !== '')) {
                    gameOver = true;
                    showGameOverDialog('It\'s a tie!');
                } else {
                    currentPlayer = player1;
                    console.log(`Current player: ${currentPlayer.name}`);
                }
            }
        }

        function handleCellClick(e) {
            const index = e.target.dataset.index;
            if (!gameOver && gameboard.setMark(index, currentPlayer.symbol)) {
                e.target.textContent = currentPlayer.symbol;
                const winner = gameboard.checkWinner();
                if (winner) {
                    gameOver = true;
                    showGameOverDialog(winner === 'X' ? 'YOU win' : 'COMPUTER wins');
                } else if (gameboard.getBoard().every(cell => cell !== '')) {
                    gameOver = true;
                    showGameOverDialog('It\'s a tie!');
                } else {
                    // If vs Computer and now it's computer's turn, let computer play
                    if (document.querySelector('.vsComputer') && document.querySelector('.vsComputer').textContent === 'YOU vs COMPUTER') {
                        currentPlayer = computer;
                        setTimeout(computerMove, 300); // slight delay for UX
                    } else {
                        currentPlayer = currentPlayer === player1 ? player2 : player1;
                        console.log(`Current player: ${currentPlayer.name}`);
                    }
                }
            }
        }

        function showGameOverDialog(message) {
            const gameOverMessage = document.getElementById('game-over-message');
            gameOverMessage.textContent = ` ${message} `;
            const gameOverDialog = document.getElementById('game-over-dialog');
            gameOverDialog.showModal();
            gameOverDialog.addEventListener('cancel', (event) => {
                event.preventDefault();
            });
            gameOverDialog.addEventListener('click', (e) => {
                if (e.target.classList.contains('restart-game')) {
                    resetGame();
                }
            });
        }

        function resetGame() {
            const cells = document.querySelectorAll('.game-container div');
            cells.forEach(cell => {
                cell.textContent = '';
            });
            gameboard.resetBoard();
            gameOver = false;
            currentPlayer = player1;
            dialog.showModal();
            console.log('Game restarted');
        }

        function init() {
            const cells = document.querySelectorAll('.game-container div');
            cells.forEach(cell => {
                cell.addEventListener('click', handleCellClick);
            });
        }

        return { init };
    }

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
        const game = GameController();
        game.init();
    });
});
