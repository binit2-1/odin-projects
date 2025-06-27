document.addEventListener('DOMContentLoaded', () => {
    const addBookBtn = document.querySelector('.add-book'); 
    const dialog = document.querySelector('dialog');
    const submitBtn = document.querySelector('.submit');
    const bookList = document.querySelector('.book-list');
    const library = [];

    function displayBooks(){
        bookList.innerHTML = '';
        library.forEach((book, index) => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');
            bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Pages: ${book.pages}</p>
                <p>Read: ${book.read ? 'Yes' : 'No'}</p>
                <button class="remove-book" data-index="${index}">Remove</button>
                <button class="read-toggle" data-index="${index}">${book.read ? 'Mark as Unread' : 'Mark as Read'}</button>
            `;
            bookList.appendChild(bookItem);
        });
    }
    
    

    function Book(){
        this.title =document.getElementById('title').value;
        this.author = document.getElementById('author').value;
        this.pages = document.getElementById('pages').value;
        this.read = document.getElementById('read').checked;
    }

    function addBookToLibrary(){
        const book = new Book();
        library.push(book);
        displayBooks();
        dialog.close();
    }

    addBookBtn.addEventListener('click', () => {
        dialog.showModal();
    });
    
    submitBtn.addEventListener('click', () => {
        addBookToLibrary();
    })

});