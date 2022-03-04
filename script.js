let myLibrary = [];

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    /* this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${status}`;
    }; */
}


function addBookToLibrary(){
    let title = prompt("Title");
    let author = prompt("Author");
    let pages = +prompt("Pages");
    let status = prompt("Status");

    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
}


const hobbit = new Book('The hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

myLibrary.push(hobbit);
myLibrary.push(hobbit);
myLibrary.push(hobbit);
myLibrary.push(hobbit);

/*
const table = document.getElementById("table-body");

function updateTable(){
    for(let book of myLibrary){
        let newRow = document.createElement("tr");
        for(let att in book){
            let data = document.createElement("td");
            data.textContent = book[att];
            newRow.appendChild(data);
        }
        table.appendChild(newRow);
    }
}

updateTable();
*/

const bookshelf = document.getElementById("books");
let n=0;
function updateBookshelf(){
    for(let book of myLibrary){


        let myNewBook = document.createElement("div");
        myNewBook.classList.add("book");
        for(let att in book){
            let data = document.createElement("div");
            data.textContent = book[att];
            myNewBook.appendChild(data);
        }
myNewBook.style.backgroundColor = `hsl(${n},100%, 50%)`;
n+=30;

        bookshelf.appendChild(myNewBook);
    }
}

updateBookshelf();