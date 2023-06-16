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
        this.Library = [];
    }

    addBookToLibrary(newBook){
        this.books.push(newBook);
    }

    removeBook(book){
        this.Library.splice(book, 1);
    }
}

const myLibrary = new Library();

