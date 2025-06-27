# 🎨 Etch-A-Sketch

**🔗 [Live Demo](https://binit2-1.github.io/odin-projects/Etch-A-Sketch/)**

An interactive browser-based drawing application inspired by the classic Etch-A-Sketch toy. Create pixel art with customizable grid sizes and drawing effects using vanilla HTML, CSS, and JavaScript.

## ✨ Features

- **Interactive Drawing Grid**: Draw by hovering your mouse over grid squares
- **Customizable Grid Size**: Adjust grid resolution for detailed or broad sketches
- **Instant Clear Function**: Reset the drawing area with a single click
- **Responsive Design**: Works seamlessly on desktop and mobile browsers
- **Custom Styling**: Zombie-themed font and playful UI design
- **Smooth Drawing**: Fluid drawing experience with hover-based interaction

## 🚀 Demo

Try the drawing app live: [Etch-A-Sketch Demo](https://binit2-1.github.io/odin-projects/Etch-A-Sketch/)

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and grid container
- **CSS3**: Grid layouts, hover effects, and custom styling
- **JavaScript ES6**: Dynamic grid generation and event handling
- **Custom Fonts**: ZombieCat font for unique aesthetic

## 📋 How to Use

1. **Visit the live demo** or open `index.html` in your browser
2. **Hover your mouse** over the grid squares to draw
3. **Adjust grid size** using the size controls to change drawing resolution
4. **Clear the board** anytime to start a fresh sketch
5. **Experiment** with different patterns and designs

## 🏗️ Project Structure

```
Etch-A-Sketch/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and grid layout
├── EtchASketch.js      # JavaScript logic and interactivity
├── README.md           # Project documentation
└── assets/
    └── zombieCat.ttf   # Custom zombie-themed font
```

## 🎯 Key Learning Concepts

This project demonstrates:

- **Dynamic DOM Manipulation**: Creating and managing grid elements programmatically
- **Event Handling**: Managing mouse events for drawing interaction
- **CSS Grid**: Building responsive and flexible grid layouts
- **JavaScript Logic**: Implementing drawing mechanics and grid management
- **User Interface Design**: Creating intuitive controls and visual feedback

## 💡 Technical Highlights

### Dynamic Grid Creation
```javascript
// Example of grid generation
function createGrid(size) {
    const container = document.querySelector('.grid-container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    // Generate grid squares
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        container.appendChild(square);
    }
}
```

### Features
- **Variable Grid Sizes**: Support for different resolutions (16x16, 32x32, 64x64, etc.)
- **Drawing State Management**: Track drawing status and grid state
- **Hover Effects**: Visual feedback during drawing interaction
- **Reset Functionality**: Clean slate for new drawings

## 🔮 Future Enhancements

- [ ] Color selection for drawing
- [ ] Different drawing modes (rainbow, grayscale, etc.)
- [ ] Brush size options
- [ ] Save drawings as images
- [ ] Undo/redo functionality
- [ ] Drawing templates and patterns
- [ ] Touch device optimization

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/odin-projects.git
   cd odin-projects/Etch-A-Sketch
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - No build process or dependencies required

3. **Start drawing**!

## 📚 Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) for the excellent curriculum
- Classic Etch-A-Sketch toy for inspiration
- ZombieCat font for unique visual appeal

---

*Built with ❤️ as part of The Odin Project curriculum*

## Customization

- You can modify the default grid size or styling by editing `EtchASketch.js` and `styles.css`.
- The font and color scheme can be changed in the CSS for a personalized look.

## Credits

- Built as part of the [Odin Project](https://www.theodinproject.com/) curriculum.
- Font: `zombieCat.ttf` from the `assets/` folder.

## License

This project is open source and free to use for educational purposes.