document.addEventListener('DOMContentLoaded', () => {
    const addBookBtn = document.querySelector('.add-book'); 
    const dialog = document.querySelector('dialog');
    const form = document.querySelector('form');
    const bookList = document.querySelector('.book-list');
    const library = [];

    function displayBooks(){
        bookList.innerHTML = '';
        library.forEach((book) => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');
            bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Pages: ${book.pages}</p>
                <p>Read: ${book.read ? 'Yes' : 'No'}</p>
                <button class="remove-book" data-id="${book.id}">Remove</button>
                <button class="read-toggle" data-id="${book.id}">${book.read ? 'Mark as Unread' : 'Mark as Read'}</button>
            `;
            const toggleBtn=bookItem.querySelector('.read-toggle');

            if (book.read){
                toggleBtn.style.backgroundColor = '#ff474c';
            }
            else{
                toggleBtn.style.backgroundColor = '#95ff64';
            }
            toggleBtn.addEventListener('mouseenter',()=>{
                if (book.read){
                    toggleBtn.style.backgroundColor = '#d1363b';
                }
                else{
                    toggleBtn.style.backgroundColor = '#85e05c';
                }
            })
            toggleBtn.addEventListener('mouseleave',()=>{
                if (book.read){
                    toggleBtn.style.backgroundColor = '#ff474c';
                }
                else{
                    toggleBtn.style.backgroundColor = '#95ff64';
                }
            })

            bookList.appendChild(bookItem);

            const removeBtn = bookItem.querySelector('.remove-book');
            removeBtn.addEventListener('click', () => {
                const bookID= removeBtn.dataset.id;
                for (let i=0; i< library.length; i++){
                    if (library[i].id===bookID){
                        library.splice(i,1);
                        break;
                    }
                }
                displayBooks(); 
            });

            const readToggleBtn = bookItem.querySelector('.read-toggle');
            readToggleBtn.addEventListener('click', () => {
                book.read = !book.read;
                displayBooks();
            });
        });
    }
    

    function Book(){
        this.id = crypto.randomUUID();
        this.title =document.getElementById('title').value;
        this.author = document.getElementById('author').value;
        this.pages = document.getElementById('pages').value;
        this.read = document.getElementById('read').checked;
    }

    function addBookToLibrary(){
        const book = new Book();
        library.push(book);
        displayBooks();
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('pages').value = '';
        document.getElementById('read').checked = false;
        
        dialog.close();
    }

    addBookBtn.addEventListener('click', () => {
        dialog.showModal();
    });
    
    form.addEventListener('submit', (event) => {
        // event.preventDefault(); 
        addBookToLibrary();
    })

});