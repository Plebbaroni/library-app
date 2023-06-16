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

    removeBook(book){
        this.Library.splice(book, 1);
    }
}

const myLibrary = new Library();

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
    //readButtonElem.onclick = 
    //deleteButtonElem.onclick;

    book
}

const updateBooks = () => {
    for(let book of myLibrary.books){
        createBook(book);
    }
}

