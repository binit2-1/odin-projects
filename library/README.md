# 📚 Personal Library Manager

A simple, interactive web application to manage your personal book collection. Built with vanilla HTML, CSS, and JavaScript as part of The Odin Project curriculum.

## ✨ Features

- **Add Books**: Create new book entries with title, author, page count, and read status
- **Remove Books**: Delete books from your library with a single click
- **Toggle Read Status**: Mark books as read or unread
- **Responsive Design**: Clean, modern interface that works on all devices
- **Form Validation**: Ensures all required fields are filled before adding books
- **Interactive UI**: Hover effects and smooth transitions for better user experience

## 🚀 Demo

![Library Demo](https://via.placeholder.com/600x400?text=Library+Demo+Screenshot)

## 🛠️ Technologies Used

- **HTML5**: Semantic structure with dialog elements
- **CSS3**: Modern styling with Grid and Flexbox layouts
- **JavaScript (ES6+)**: Dynamic functionality with constructor functions and DOM manipulation
- **Google Fonts**: Poppins font family for typography

## 📋 How to Use

1. **Adding a Book**:
   - Click the "Add Book" button
   - Fill in the book details in the modal form
   - All fields (Title, Author, Pages) are required
   - Optionally check if you've read the book
   - Click "Submit" to add the book to your library

2. **Managing Books**:
   - **Remove**: Click the red "Remove" button to delete a book
   - **Toggle Read Status**: Click the green/red toggle button to mark as read/unread

3. **Visual Indicators**:
   - Green buttons indicate "read" books
   - Red buttons indicate "unread" books
   - Hover effects provide visual feedback

## 🏗️ Project Structure

```
library/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and layout
├── reset.css           # CSS reset for consistent styling
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── img/
    └── GitHub.svg      # GitHub icon
```

## 🎯 Key Learning Objectives

This project demonstrates:

- **Object-Oriented Programming**: Using constructor functions to create book objects
- **DOM Manipulation**: Dynamically creating and managing HTML elements
- **Event Handling**: Managing user interactions with event listeners
- **Form Validation**: Implementing both HTML5 and JavaScript validation
- **Data Management**: Storing and manipulating data in arrays
- **Unique Identifiers**: Using `crypto.randomUUID()` for stable object identification
- **Responsive Design**: Creating layouts that work on various screen sizes

## 💡 Technical Highlights

### Book Constructor Function
```javascript
function Book(){
    this.id = crypto.randomUUID();
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
    this.pages = document.getElementById('pages').value;
    this.read = document.getElementById('read').checked;
}
```

### Dynamic Display System
- Books are stored in an array and dynamically rendered
- Each book gets a unique ID for reliable identification
- Event delegation handles button interactions efficiently

### Modern CSS Features
- CSS Grid for responsive book layout
- CSS Custom Properties for consistent theming
- Modern dialog elements for modal forms

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/library-project.git
   cd library-project
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - No build process or dependencies required

3. **Start managing your books**!

## 🔮 Future Enhancements

- [ ] Responsiveness
- [ ] Local Storage persistence
- [ ] Book search and filtering
- [ ] Book categories/genres
- [ ] Export library to CSV/JSON
- [ ] Book cover images
- [ ] Reading progress tracking
- [ ] Dark mode theme
- [ ] Backend integration for cloud sync

## 🤝 Contributing

This is a learning project, but suggestions and improvements are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) for the excellent curriculum
- [Google Fonts](https://fonts.google.com/) for the Poppins font family
- Inspiration from modern library management systems

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ as part of The Odin Project journey*
