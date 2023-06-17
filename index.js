class Book{
    constructor(title, author, pages, isRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

class Library{
    constructor(){
        this.books = [];
    }

    addBookToLibrary(newBook){
        this.books.push(newBook);
    }

    deleteBook(book){
        console.log(`${book}`);
        this.books.splice(book, 1);
    }
}

const myLibrary = new Library();
const libraryElem = document.getElementById("library");

const readButton = document.getElementById('read');
const deleteButton = document.getElementById('delete');
const addButton = document.getElementById('form');

function formToBook(){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    return new Book(title, author, pages);
}

const addBookToLibrary = (e) =>{
    e.preventDefault();
    const newBook = formToBook();
    myLibrary.addBookToLibrary(newBook);
    updateBooks();
}

function filterBook(title){
    for (book of myLibrary.books){
        if(book.title === title){
            return myLibrary.books.indexOf(book);
        }
    }
}

const deleteBook = (e) => {
    const deleteId = e.target.parentNode.parentNode.firstChild.firstChild.textContent;
    console.log(`${filterBook(deleteId)}`);
    myLibrary.deleteBook(filterBook(deleteId));
    updateBooks();
}

const toggleReadStatus = (e) => {
    const toggle = e.target.parentNode.firstChild;
    if(toggleStatus === "False"){
        toggle.textContent = "Read";
        toggle.style.backgroundColor = "lightgreen";
        toggleStatus = "True";
    }else{
        toggle.textContent = "Not Read";
        toggle.style.backgroundColor = "red";
        toggleStatus = "False";
    }
}

addButton.onsubmit = addBookToLibrary;

function createBook(book){
    const bookElem = document.createElement('div');
    const bookContent = document.createElement('div');
    const bookButtons = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookInfo = document.createElement('p');
    const readButtonElem = document.createElement('button');
    const deleteButtonElem = document.createElement('button');

    bookElem.classList.add('book');
    bookContent.classList.add('bookinfo');
    bookButtons.classList.add('bookbuttons');
    bookTitle.classList.add('booktitle');
    bookInfo.classList.add('author');
    toggleStatus = "False";
    readButtonElem.style.backgroundColor = "red";
    readButtonElem.onclick = toggleReadStatus;
    deleteButtonElem.onclick = deleteBook;

    bookTitle.textContent = `${book.title}`;
    bookInfo.textContent = `${book.author} | ${book.pages} pages`;
    deleteButtonElem.textContent = "Delete";
    readButtonElem.textContent = "Not Read";
    bookContent.appendChild(bookTitle);
    bookContent.appendChild(bookInfo);
    bookButtons.appendChild(readButtonElem);
    bookButtons.appendChild(deleteButtonElem);
    bookElem.appendChild(bookContent);
    bookElem.appendChild(bookButtons);
    libraryElem.appendChild(bookElem);
}

const updateBooks = () => {
    libraryElem.innerHTML = '';
    for(let book of myLibrary.books){
        createBook(book);
    }
}

