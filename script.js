class Book {
    constructor(title, author, genre, year, read) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
        this.read = read;
        this.is_read = function () {
            if (this.read === "yes") {
                return {
                    class: "read",
                    text: "Read"
                }
            } else {
                return {
                    class: "read not",
                    text: "Not read"
                }
            }
        };
    }
}

const book0 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Tragedy", 1925, "yes");
const book1 = new Book("Moby-Dick; or, The Whale", "Herman Melville", "Adventure fiction", 1851, "no");
const book2 = new Book("The Catcher in the Rye", "J. D. Salinger", "Realistic fiction", 1951, "yes");

const myLibrary = [book0, book1, book2];

function assignId() {
    myLibrary.forEach((book, i) => {
        book.id = i;
    });
}

function displayCollection() {
    for (let i = 0; i < myLibrary.length; i++) {
        bookDisplay(myLibrary[i]);
    }
}

function bookDisplay(book) {
    const cards_container = document.getElementById("cards-container");
    const card = document.createElement("div");
    card.id = `book${book.id}`;
    card.className = "card";
    cards_container.appendChild(card);

    const card_header = document.createElement("div");
    card_header.className = "header";
    const card_main = document.createElement("div");
    card_main.className = "main";
    const card_footer = document.createElement("div");
    card_footer.className = "footer";
    card.append(card_header, card_main, card_footer);

    const header_h1 = document.createElement("h1");
    header_h1.textContent = "Title: ";
    const header_p = document.createElement("p");
    header_p.textContent = `${book.title}`;
    card_header.append(header_h1, header_p);

    const author = document.createElement("div");
    const genre = document.createElement("div");
    const year = document.createElement("div");
    card_main.append(author, genre, year);

    const author_h2 = document.createElement("h2");
    author_h2.textContent = "Author: ";
    const author_p = document.createElement("p");
    author_p.textContent = `${book.author}`;
    author.append(author_h2, author_p);

    const genre_h2 = document.createElement("h2");
    genre_h2.textContent = "Genre: ";
    const genre_p = document.createElement("p");
    genre_p.textContent = `${book.genre}`;
    genre.append(genre_h2, genre_p);

    const year_h2 = document.createElement("h2");
    year_h2.textContent = "Year: ";
    const year_p = document.createElement("p");
    year_p.textContent = `${book.year}`;
    year.append(year_h2, year_p);

    const btn_read = document.createElement("button");
    btn_read.type = "button";
    btn_read.className = book.is_read().class;
    btn_read.textContent = book.is_read().text;
    btn_read.addEventListener("click", () => {
        if (book.read === "yes") {
            btn_read.className = "read not";
            btn_read.textContent = "Not read";
            book.read = "no";
        } else {
            btn_read.className = "read";
            btn_read.textContent = "Read";
            book.read = "yes";
        }
    });

    const btn_remove = document.createElement("button");
    btn_remove.type = "button";
    btn_remove.className = "remove";
    btn_remove.textContent = "Remove";
    btn_remove.addEventListener("click", function () {
        card.style.opacity = '0';
        setTimeout(() => card.remove(), 500);
        myLibrary.splice(`${book.id}`, 1);
        assignId();
    });

    card_footer.append(btn_read, btn_remove);
};
window.onload = () => {
    assignId();
    displayCollection();
}