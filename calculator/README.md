# 🧮 Calculator

**🔗 [Live Demo](https://binit2-1.github.io/odin-projects/calculator/)**

A fully functional calculator web application with a retro digital display design. Built with vanilla HTML, CSS, and JavaScript as part of The Odin Project curriculum.

## ✨ Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- **Percentage Calculation**: Built-in percentage function using the % button
- **Clear & Delete Functions**: AC button clears display, DEL removes last character
- **Digital Display**: Custom digital font for authentic calculator appearance
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: Prevents invalid operations and displays appropriate messages
- **Keyboard-Free Operation**: All input via intuitive on-screen buttons

## 🚀 Demo

Try the calculator live: [Calculator Demo](https://binit2-1.github.io/odin-projects/calculator/)

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with custom fonts and responsive design
- **JavaScript ES6**: Event handling, DOM manipulation, and calculation logic
- **Custom Fonts**: Digital7Italic font for authentic calculator display

## 📋 How to Use

1. **Visit the live demo** or open `index.html` in your browser
2. **Enter numbers** by clicking the digit buttons (0-9)
3. **Select operations** using +, -, ×, ÷ buttons
4. **Calculate results** by pressing the = button
5. **Clear display** with AC or delete last entry with DEL
6. **Use percentage** with the % button for quick calculations

## 🏗️ Project Structure

```
calculator/
├── index.html              # Main HTML structure
├── styles.css              # CSS styling and layout
├── calculator.js           # JavaScript logic and event handling
├── README.md              # Project documentation
└── assets/
    └── Digital7Italic-BW658.ttf  # Custom digital font
```

## 🎯 Key Learning Concepts

This project demonstrates:

- **Event Handling**: Managing user interactions with buttons
- **DOM Manipulation**: Updating display and managing calculator state
- **JavaScript Logic**: Implementing arithmetic operations and error handling
- **CSS Styling**: Creating a polished, professional interface
- **Responsive Design**: Ensuring functionality across different screen sizes

## 💡 Technical Highlights

### Calculator Logic
```javascript
// Example of operation handling
function operate(operator, a, b) {
    switch(operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '×': return a * b;
        case '÷': return b !== 0 ? a / b : 'Error';
        default: return null;
    }
}
```

### Features
- **Chained Operations**: Perform multiple operations in sequence
- **Decimal Support**: Handle floating-point arithmetic
- **Error Prevention**: Validate inputs and prevent invalid operations
- **Visual Feedback**: Button press animations and hover effects

## 🔮 Future Enhancements

- [ ] Scientific calculator functions (sin, cos, tan, etc.)
- [ ] Memory functions (M+, M-, MC, MR)
- [ ] Keyboard input support
- [ ] History of calculations
- [ ] Different themes/color schemes
- [ ] Sound effects for button presses

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/odin-projects.git
   cd odin-projects/calculator
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - No build process or dependencies required

3. **Start calculating**!

## 📚 Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) for the excellent curriculum
- Digital7 font family for the authentic calculator display
- Modern calculator designs for UI inspiration

---

*Built with ❤️ as part of The Odin Project curriculum*

## Customization

- Change the color scheme or button styles in `styles.css`.
- Replace the digital font in the `assets/` folder for a different display style.
- Extend functionality (e.g., add keyboard support or scientific functions) in `calculator.js`.

## Credits

- Built as part of the [Odin Project](https://www.theodinproject.com/) curriculum.
- Digital font: `Digital7Italic-BW658.ttf` from the `assets/` folder.

## License

This project is open source and free to use for educational purposes.
