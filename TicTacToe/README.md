# Tic Tac Toe

A simple Tic Tac Toe game built with JavaScript, HTML, and CSS. This project is a learning exercise and demonstrates basic DOM manipulation, event handling, and game logic for a classic two-player game.

## Features
- Play against another human (no working computer/AI opponent)
- Responsive UI with dialog boxes for game start and game over
- Basic modular code structure
- Game state and UI are somewhat separated, but not fully decoupled

## Limitations
- **No working computer/AI opponent:** The “VS Computer” mode is not implemented or functional.
- **No true factory functions:** The code does not use proper factory functions for Gameboard, Player, or GameController. Most logic is handled in regular functions and variables.
- **Not fully modular:** Some logic and UI are still mixed together.
- **No unbeatable AI:** There is no minimax or advanced AI logic.

## How to Play
1. Open `index.html` in your browser.
2. Choose to play against a Human in the start dialog (Computer mode does not work).
3. Click on the board to make your move.
4. The game will announce the winner or a tie. Click "Restart Game" to play again.

## Project Structure
- `index.html` — Main HTML file
- `styles.css` — All styles for the game and dialogs
- `script.js` — All game logic
- `README.md` — This file

## Concepts Demonstrated
- Basic DOM manipulation and event handling
- Simple game logic for Tic Tac Toe
- Use of dialog boxes for user interaction

## Credits
- Built as part of The Odin Project curriculum
- For learning and experimentation purposes

---

If you want to implement a working computer opponent or refactor the code to use true factory functions and modular design, see The Odin Project’s advanced JavaScript lessons or ask for further guidance!
