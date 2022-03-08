let myLibrary = [];

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

const bookshelf = document.getElementById("books");

let addBook = document.getElementById("add-book");

let popUp = document.getElementById("pop-up");
let addButton = document.getElementById("add");
let cancelButton = document.getElementById("cancel");

let bookTitle = document.getElementById("title");
let bookAuthor = document.getElementById("author");
let bookPages = document.getElementById("pages");
let bookStatus = document.getElementById("status");


addBook.addEventListener("click", newBook);
addButton.addEventListener("click", addBookToLibrary);
cancelButton.addEventListener("click", resetValues);


function updateBookshelf(){
    bookshelf.innerHTML = "";
    let index = 0;
    for(let book of myLibrary){        
        let myNewBook = document.createElement("div");
        myNewBook.classList.add("book");

        for(let att in book){
            if(att !== "status"){
                let key = att.split('').shift().toUpperCase() + att.slice(1,) + ':';
                let data = document.createElement("div");
                data.textContent = `${key} ${book[att]}`;

                myNewBook.appendChild(data);
            }else{
                let btn = document.createElement("button");
                btn.classList.add("button");
                btn.addEventListener("click", toggleClass)

                if(book[att]){
                    btn.classList.add("read");
                    btn.textContent = "Read";
                }else{
                    btn.classList.add("notRead");
                    btn.textContent = "Not read";
                }
     
                myNewBook.appendChild(btn);
            }
        }

        let removeBtn = document.createElement("button");
        removeBtn.classList.add("cancel");
        removeBtn.classList.add("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", removeBook);
        myNewBook.appendChild(removeBtn);

        myNewBook.dataset.bookIndex = `book-${index}`;

        bookshelf.appendChild(myNewBook);
        index++;
    }
}

function newBook(){
    popUp.style.display = "block";
}

function addBookToLibrary(){
    let areFilled = true;
    document.getElementById("pop-up").querySelectorAll("[required]").forEach( field => {
        if(!field.checkValidity()){
            areFilled = false;
        }
    });
    if(!areFilled){
        return;
    } 

    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = +bookPages.value;
    let status = bookStatus.checked;

    resetValues();

    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    updateBookshelf();
}

function resetValues(){
    bookTitle.value = bookTitle.defaultValue;
    bookAuthor.value = bookAuthor.defaultValue;
    bookPages.value = bookPages.defaultValue;
    bookStatus.checked = false;

    popUp.style.display = "none";
}

function toggleClass(){
    // console.log(this.parentElement.dataset.bookIndex);
    // console.log(this.parentElement.dataset.bookIndex.split("-").pop());

    if(this.textContent === "Read"){
        this.classList.remove("read");
        this.classList.add("notRead");
        this.textContent = "Not read";
    }else{
        this.classList.remove("notRead");
        this.classList.add("read");
        this.textContent = "Read";
    }

    let index = this.parentElement.dataset.bookIndex.split("-").pop();
    myLibrary[index].status = !myLibrary[index].status;
}

function removeBook(){
    index = this.parentElement.dataset.bookIndex.split("-").pop();
    myLibrary.splice(index, 1);
    updateBookshelf();
    // console.log(myLibrary);
}