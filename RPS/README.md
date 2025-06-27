# 🪨📄✂️ Rock Paper Scissors

**🔗 [Live Demo](https://binit2-1.github.io/odin-projects/RPS/)**

A modern web-based implementation of the classic Rock Paper Scissors game. Play against a computer opponent with visual feedback, score tracking, and responsive design built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

- **Interactive Gameplay**: Play Rock, Paper, or Scissors against an intelligent computer opponent
- **Score Tracking**: Real-time scoreboard tracking wins for both player and computer
- **Visual Feedback**: Clear display of choices and round results with icons and messages
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Game Statistics**: Track your performance across multiple rounds
- **Modern UI**: Clean, intuitive interface with hover effects and animations

## 🚀 Demo

Challenge the computer: [Rock Paper Scissors Demo](https://binit2-1.github.io/odin-projects/RPS/)

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and accessibility features
- **CSS3**: Modern styling with flexbox and responsive design
- **JavaScript ES6**: Game logic, random generation, and DOM manipulation
- **Custom Assets**: Rock, paper, and scissors icons for visual gameplay

## 📋 How to Use

1. **Visit the live demo** or open `index.html` in your browser
2. **Choose your move** by clicking on Rock, Paper, or Scissors
3. **Watch the computer** make its random selection
4. **See the result** - win, lose, or tie for each round
5. **Track your score** and try to beat the computer!

## 🎮 Game Rules

- **Rock** beats **Scissors** (crushes)
- **Scissors** beats **Paper** (cuts)
- **Paper** beats **Rock** (covers)
- Same choices result in a **tie**

## 🏗️ Project Structure

```
RPS/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── RPS.js              # JavaScript game logic and interactions
├── README.md           # Project documentation
└── imgs/
    ├── rock.png        # Rock choice icon
    ├── paper.png       # Paper choice icon
    └── scissors.png    # Scissors choice icon
```

## 🎯 Key Learning Concepts

This project demonstrates:

- **Game Logic Implementation**: Building rules and win/lose conditions
- **Random Number Generation**: Creating unpredictable computer choices
- **Conditional Statements**: Implementing game rules with if/else logic
- **DOM Manipulation**: Updating UI elements based on game state
- **Event Handling**: Managing user interactions and button clicks
- **State Management**: Tracking scores and game progress

## 💡 Technical Highlights

### Game Logic
```javascript
// Example of game logic implementation
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}
```

### Features
- **Random Computer Selection**: Unpredictable AI opponent
- **Score Persistence**: Scores maintained throughout game session
- **Visual Indicators**: Icons and colors showing game state
- **Responsive Layout**: Adapts to different screen sizes

## 🔮 Future Enhancements

- [ ] Best of 5/10 game modes
- [ ] Difficulty levels for computer opponent
- [ ] Animated choice reveals
- [ ] Sound effects and music
- [ ] Multiplayer mode (local or online)
- [ ] Game history and statistics
- [ ] Different themes and styles
- [ ] Tournament bracket system

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/odin-projects.git
   cd odin-projects/RPS
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - No build process or dependencies required

3. **Start playing**!

## 📚 Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) for the excellent curriculum
- Classic Rock Paper Scissors game for timeless entertainment
- Icon designers for visual game assets

---

*Built with ❤️ as part of The Odin Project curriculum*

## Customization

- You can change the images for each move by replacing the files in the `imgs/` folder.
- Modify the color scheme, fonts, or layout in `styles.css` to personalize the look and feel.
- Adjust the game logic or add new features in `RPS.js`.

## Credits

- Built as part of the [Odin Project](https://www.theodinproject.com/) curriculum.
- Images for rock, paper, and scissors are used for educational purposes.

## License

This project is open source and free to use for educational purposes.