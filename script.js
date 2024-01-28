class Book {
  constructor(title, author, genre, year, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
    this.read = read;
  }
  readToggle() {
    if (this.read === "yes") {
      return {
        class: "read",
        text: "Read",
      };
    } else {
      return {
        class: "read not",
        text: "Not read",
      };
    }
  }
}

const book0 = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "Tragedy",
  "1925",
  "yes"
);
const book1 = new Book(
  "Moby-Dick",
  "Herman Melville",
  "Adventure fiction",
  "1851",
  "no"
);
const book2 = new Book(
  "The Catcher in the Rye",
  "J. D. Salinger",
  "Realistic fiction",
  "1951",
  "yes"
);

const myLibrary = [book0, book1, book2];
let userBook;

function addToLibrary() {
  myLibrary.push(userBook);
}

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
  const cardsContainer = document.getElementById("cards-container");
  const card = document.createElement("div");
  card.className = "card";
  cardsContainer.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.className = "header";
  const cardMain = document.createElement("div");
  cardMain.className = "main";
  const cardFooter = document.createElement("div");
  cardFooter.className = "footer";
  card.append(cardHeader, cardMain, cardFooter);

  const header_h1 = document.createElement("h1");
  header_h1.textContent = "Title: ";
  const header_p = document.createElement("p");
  header_p.textContent = `${book.title}`;
  cardHeader.append(header_h1, header_p);

  const author = document.createElement("div");
  const genre = document.createElement("div");
  const year = document.createElement("div");
  cardMain.append(author, genre, year);

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

  const btnRead = document.createElement("button");
  btnRead.type = "button";
  btnRead.className = book.readToggle().class;
  btnRead.textContent = book.readToggle().text;
  btnRead.addEventListener("click", () => {
    if (book.read === "yes") {
      btnRead.className = "read not";
      btnRead.textContent = "Not read";
      book.read = "no";
    } else {
      btnRead.className = "read";
      btnRead.textContent = "Read";
      book.read = "yes";
    }
  });

  const btnRemove = document.createElement("button");
  btnRemove.type = "button";
  btnRemove.className = "remove";
  btnRemove.textContent = "Remove";
  btnRemove.addEventListener("click", () => {
    card.style.opacity = "0";
    setTimeout(() => card.remove(), 500);
    myLibrary.splice(`${book.id}`, 1);
    assignId();
  });

  cardFooter.append(btnRead, btnRemove);
}

const openModal = document.getElementById("open-modal");
const bookModal = document.getElementById("book-modal");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");

const title = document.getElementById("title");
const author = document.getElementById("author");
const genre = document.getElementById("genre");
const year = document.getElementById("year");
const read = document.getElementById("read");

openModal.addEventListener("click", () => {
  bookModal.showModal();
});

function validateForm() {
  if (title.value === "") {
    alert("Please fill out 'title' field");
  } else if (author.value === "") {
    alert("Please fill out 'author' field");
  } else if (genre.value === "") {
    alert("Please fill out 'genre' field");
  } else if (year.validity.valid === false) {
    if (year.value === "") {
      alert("Please fill out 'year' field");
    } else if (year.value < 1 || year.value > 2024) {
      alert("'Year' must be higher than 0 and lower than 2025");
    }
  }
}
const form = document.getElementById("form");
confirmBtn.addEventListener("click", () => {
  if (form.checkValidity() === false) {
    validateForm();
  } else {
    bookModal.close();
    userBook = new Book(
      title.value,
      author.value,
      genre.value,
      year.value,
      read.value
    );
    addToLibrary();
    assignId();
    bookDisplay(userBook);
    document.getElementById("form").reset();
  }
});

cancelBtn.addEventListener("click", () => {
  bookModal.close();
});

assignId();
displayCollection();
