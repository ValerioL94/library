class Book {
    constructor(title, author, genre, year, read) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
    }
    is_read(answer) {
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "tragedy", 1925, "not read");
const book2 = new Book("Moby-Dick; or, The Whale", "Herman Melville", "adventure fiction", 1851, "not read");
const book3 = new Book("The Catcher in the Rye", "J. D. Salinger", "realistic fiction", 1951, "not read");

const myLibrary = [book1, book2, book3];



function addBookToLibrary() {

}

const read_buttons = document.getElementsByClassName("read");
for (const button of read_buttons) {
    button.addEventListener("click", function () {
        if (button.classList.contains("not")) {
            button.classList.remove("not")
            button.innerHTML = "Read"
        } else {
            button.classList.add("not")
            button.innerHTML = "Not read"
        }
    });
}
// read_button.forEach((button) => {
//     addEventListener("click", function() {
//         if (button.className)
//     })
// });
