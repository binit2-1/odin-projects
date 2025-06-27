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
            const toggleBtn=bookItem.querySelector('.read-toggle');

            if (book.read){
                toggleBtn.style.backgroundColor = '#95ff64';
            }
            else{
                toggleBtn.style.backgroundColor = '#ff474c';
            }
            toggleBtn.addEventListener('mouseenter',()=>{
                if (book.read){
                    toggleBtn.style.backgroundColor = '#85e05c';
                }
                else{
                    toggleBtn.style.backgroundColor = '#ba3236';
                }
            })
            toggleBtn.addEventListener('mouseleave',()=>{
                if (book.read){
                    toggleBtn.style.backgroundColor = '#95ff64';
                }
                else{
                    toggleBtn.style.backgroundColor = '#ff474c';
                }
            })

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