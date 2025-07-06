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
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
            [0, 4, 8], [2, 4, 6] // Diagonal
        ];

        function HandleClicks() {
            let p1 = 'X';
            let p2 = 'O';
            let currentPlayer = p1;
            let gameOver = false;
            const cells = document.querySelectorAll('.game-container div');
            cells.forEach(cell => {
                cell.addEventListener('click', (e) => {
                    const index = e.target.dataset.index;
                    console.log(`Cell clicked: ${index}`);
                    if (board[index] === '' && gameOver == false) {
                        board[index] = currentPlayer;
                        e.target.textContent = currentPlayer;
                        currentPlayer = currentPlayer === p1 ? p2 : p1;
                        console.log(`Current player: ${currentPlayer}`);
                    }
                });
            });

        }
        HandleClicks();
    }
});
